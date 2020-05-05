import React, { useState, useContext } from 'react'
import { PostsDiv, UserDiv, UserDivDate } from './threadStyle'
import { TiUser, TiCalendarOutline } from 'react-icons/ti'
import Layout from '../../components/Layout'
import { Post } from './components/post'
import { NewPost } from './components/newPost'
import { Pagination } from '../../components/pagination'
import { Paper } from '../../components/Paper'
import { useQuery } from 'react-apollo'
import { GET_THREAD } from '../../graphql/query/getThread'
import { useRouter } from 'next/router'
import { GetThread, GetThreadVariables } from '../../generated/GetThread'
import { GetThreadPosts, GetThreadPostsVariables } from '../../generated/GetThreadPosts'
import { GET_THREAD_POSTS } from '../../graphql/query/getThreadPosts'
import { UserContext } from '../../context/userContext'
import { formatDate } from '../../utils/formatDate'
import { ThreadTitle } from './components/title'

interface Props {}

const Thread: React.FunctionComponent<Props> = () => {
  const router = useRouter()
  const [page, setPage] = useState(1)
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

  const renderPosts = () => {
    return posts.map(({ author, text, id, createdAt, updatedAt }, idx) => (
      <Post
        {...author}
        createdAt={createdAt}
        updatedAt={updatedAt}
        text={text}
        key={id}
        index={idx + 1}
        postId={id}
        loggedInUser={user}
        page={page}
        threadId={rest.id}
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
      <ThreadTitle
        title={title}
        threadId={rest.id}
        owner={owner}
        createdAt={rest.createdAt}
        user={user}
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
