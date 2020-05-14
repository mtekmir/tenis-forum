import React from 'react'
import Layout from '../../components/Layout'
import { TopDiv, ForumTitle, Breadcrumbs, TitleDiv } from './forumStyle'
import { Pagination } from '../../components/pagination'
import { FetchMoreOptions, FetchMoreQueryOptions } from 'apollo-boost'
import { Button } from '../../components/Button'
import { useRouter } from 'next/router'
import { useQuery } from 'react-apollo'
import { GET_FORUM } from '../../graphql/query/getForum'
import { GetForum, GetForumVariables } from '../../graphql/generated/GetForum'
import { GetLatestPosts } from '../../graphql/generated/GetLatestPosts'
import { GET_LATEST_POSTS } from '../../graphql/query/getThreadsLastPosts'
import { ForumThread } from './components/Thread'

interface Props {}
const Forum: React.FC<Props> = ({}) => {
  const {
    query: { id },
  } = useRouter()
  const forumId = parseInt(id as string, 10)
  const { data, loading, fetchMore } = useQuery<GetForum, GetForumVariables>(GET_FORUM, {
    variables: { id: forumId },
  })

  const { data: latestPosts } = useQuery<GetLatestPosts>(GET_LATEST_POSTS, {
    variables: { forumId },
  })

  if (loading) {
    return <div>Loading</div>
  }

  const {
    forumGet: { forum },
  } = data

  const renderThreads = () => {
    return forum.threads.map(thread => (
      <ForumThread
        {...thread}
        latestPost={
          latestPosts && latestPosts.threadGetLastPosts.find(p => p.threadId === thread.id)
        }
      />
    ))
  }

  const handleFetchMore = (offset: number) => {
    fetchMore({
      variables: { id: forum.id, offset },
      updateQuery: (prevRes, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prevRes
        }

        return fetchMoreResult
      },
    })
  }

  return (
    <Layout title={`${forum.name} | Tenis Forum`}>
      <div>
        <TopDiv>
          <TitleDiv>
            <Breadcrumbs>{`Forum > ${forum.category.name} >`}</Breadcrumbs>
            <ForumTitle>{forum.name}</ForumTitle>
          </TitleDiv>
          <Button color='primary' url={`/forum/${forum.id}/baslik/yeni`} text='Yeni Başlık' />
        </TopDiv>
        <Pagination count={forum.threads.length} getRows={offset => handleFetchMore(offset)} />
      </div>
      {renderThreads()}
    </Layout>
  )
}

export default Forum
