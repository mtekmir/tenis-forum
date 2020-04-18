import React from 'react'
import { PostsDiv, UserDiv, UserDivDate, ThreadTitle } from './threadStyle'
import { TiUser, TiCalendarOutline } from 'react-icons/ti'
import Layout from '../../components/Layout'
import { Post } from './components/post'
import { format } from 'date-fns'
import { NewPost } from './components/newPost'
import { Pagination } from '../../components/pagination'
import { Paper } from '../../components/Paper'
import { useQuery } from 'react-apollo'
import { GET_THREAD } from '../../graphql/query/getThread'
import { useRouter } from 'next/router'
import { GetThread, GetThreadVariables } from '../../generated/GetThread'

interface Props {}

const Thread: React.FunctionComponent<Props> = () => {
  const {
    query: { id },
  } = useRouter()

  const { data, loading, fetchMore } = useQuery<GetThread, GetThreadVariables>(GET_THREAD, {
    variables: { id: id as string },
  })

  if (loading) {
    return <div>Loading</div>
  }

  const {
    threadGet: {
      thread: { title, owner, posts, ...rest },
      postCount,
    },
  } = data

  const renderPosts = () => {
    return posts.map(({ author, text, id, createdAt }, idx) => (
      <Post
        username={author.username}
        profileImageUrl={author.profileImageUrl}
        createdAt={createdAt}
        text={text}
        key={id}
        index={idx + 2}
        id={id}
      />
    ))
  }

  const handleFetchMore = (offset: number) => {
    fetchMore({
      variables: { id: rest.id, offset },
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
      <Paper>
        <ThreadTitle>{title}</ThreadTitle>
        <UserDiv>
          <TiUser />
          <div>{owner.username}</div>
          &#183;
          <UserDivDate>
            <TiCalendarOutline />
            <div>{format(rest.createdAt, 'MMM DD, YYYY')}</div>
          </UserDivDate>
        </UserDiv>
      </Paper>
      <PostsDiv>
        <Pagination count={postCount} getRows={offset => handleFetchMore(offset)} />
        {renderPosts()}
        <NewPost threadId={rest.id} />
      </PostsDiv>
    </Layout>
  )
}

export default Thread
