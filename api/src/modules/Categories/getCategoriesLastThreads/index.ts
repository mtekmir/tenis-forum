import { QueryResolvers } from '../../../types/schema'
import { getConnection } from 'typeorm'

export const categoryGetLastThreads: QueryResolvers['categoryGetLastThreads'] = async (
  _,
  __,
  { s3BucketUrl }
) => {
  const data: any[] = await getConnection().query(`
    select thread.id, thread."createdAt", title, thread."forumId", "ownerId", "profileImageKey", username
    from forum f
    left outer join (
      select "forumId", MAX("createdAt") latest
      from thread
      group by "forumId"
    ) lt on f.id = lt."forumId"
    left outer join thread on lt."forumId" = thread."forumId"
    and lt.latest = thread."createdAt"
    join users u on u.id = thread."ownerId"
  `)

  return data.map(({ profileImageKey, ...thread }) => ({
    ...thread,
    profileImageUrl: `${s3BucketUrl}/${profileImageKey}`,
  }))
}
