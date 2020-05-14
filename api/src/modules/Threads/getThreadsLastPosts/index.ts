import { QueryResolvers } from '../../../types/schema'
import { getConnection } from 'typeorm'

export const threadGetLastPosts: QueryResolvers['threadGetLastPosts'] = async (
  _,
  { input: { forumId } },
  { s3BucketUrl }
) => {
  // On forum detail page get last posts of all threads
  const data: any[] = await getConnection().query(
    `
    select post.id, post."createdAt", "authorId", "profileImageKey", username, t.id as "threadId"
    from thread t
    left outer join (
      select post."threadId", MAX("createdAt") latest
      from post
      group by post."threadId"
    ) lt on t.id = lt."threadId"
    left outer join post on lt."threadId" = post."threadId"
    and lt.latest = post."createdAt"
    join users u on u.id = post."authorId"
    where t."forumId" = $1
  `,
    [forumId]
  )

  return data.map(({ profileImageKey, ...post }) => ({
    ...post,
    profileImageUrl: `${s3BucketUrl}/${profileImageKey}`,
  }))
}
