import React, { useState, useContext } from 'react'
import { PostsDiv, UserDiv, UserDivDate } from './threadStyle'
import Layout from '../../components/Layout'
import { Post } from './components/post'
import { NewPost } from './components/newPost'
import { Pagination } from '../../components/pagination'
import { Paper } from '../../components/Paper'
import { useQuery } from 'react-apollo'
import { GET_THREAD } from '../../graphql/query/getThread'
import { useRouter } from 'next/router'
import { GetThread, GetThreadVariables } from '../../graphql/generated/GetThread'
import {
  GetThreadPosts,
  GetThreadPostsVariables,
} from '../../graphql/generated/GetThreadPosts'
import { GET_THREAD_POSTS } from '../../graphql/query/getThreadPosts'
import { UserContext } from '../../context/userContext'
import { ThreadTitle } from './components/title'
import { ReportModal } from './components/reportModal'

interface Props {}

const Thread: React.FunctionComponent<Props> = () => {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [postIdToReport, setPostIdToReport] = useState<number | null>(null)
  const { user } = useContext(UserContext)

  const { data: threadRes, loading: tLoading } = useQuery<GetThread, GetThreadVariables>(
    GET_THREAD,
    {
      variables: { id: router.query.id as string },
    }
  )

  const { data: postsRes, loading: pLoading, fetchMore } = useQuery<
    GetThreadPosts,
    GetThreadPostsVariables
  >(GET_THREAD_POSTS, {
    variables: { threadId: router.query.id as string, page: 1 },
  })

  if (tLoading || pLoading) {
    return <div>Loading</div>
  }

  const {
    threadGet: {
      thread: { title, owner, ...rest },
    },
  } = threadRes
  const {
    threadGetPosts: { posts, count },
  } = postsRes

  const closeModal = () => {
    setReportModalOpen(false)
    setPostIdToReport(null)
  }

  const openReportPostModal = (id: number) => {
    setReportModalOpen(true)
    setPostIdToReport(id)
  }

  const renderPosts = () => {
    return posts.map(({ author, id, ...post }, idx) => (
      <Post
        {...author}
        {...post}
        key={id}
        index={idx + 1}
        postId={id}
        loggedInUser={user}
        page={page}
        threadId={rest.id}
        openReportPostModal={openReportPostModal}
      />
    ))
  }

  const handleFetchMore = (offset: number) => {
    fetchMore({
      variables: { threadId: rest.id.toString(), page: 2 },
      // TODO: Fix pagination
      updateQuery: (prevRes, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prevRes
        }

        return fetchMoreResult
      },
    })
  }

  return (
    <Layout title={`${title} | Tenis Forum`}>
      <ReportModal
        open={reportModalOpen}
        onClose={closeModal}
        postId={postIdToReport}
        threadId={rest.id}
      />
      <ThreadTitle
        title={title}
        threadId={rest.id}
        owner={owner}
        createdAt={rest.createdAt}
        user={user}
        openReportModal={() => setReportModalOpen(true)}
      />
      <PostsDiv>
        <Pagination
          page={page}
          setPage={setPage}
          count={count}
          getRows={offset => handleFetchMore(offset)}
        />
        {renderPosts()}
        <NewPost threadId={rest.id} page={page} count={count} />
      </PostsDiv>
    </Layout>
  )
}

export default Thread
