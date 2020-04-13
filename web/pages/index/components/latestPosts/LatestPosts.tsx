import React from 'react'
import { Post, Posts } from './latestPostsStyle'
import { timeLeft } from '../../../../utils/timeLeft'
import { GET_ALL_POSTS } from '../../../../graphql/query/admin/getAllPosts'
import { useQuery } from 'react-apollo'
import { GetAllPosts, GetAllPostsVariables } from '../../../../generated/GetAllPosts'

interface Props {}

export const LatestPosts: React.FC<Props> = () => {
  const { data, loading, error } = useQuery<GetAllPosts, GetAllPostsVariables>(GET_ALL_POSTS, {
    variables: { limit: 5 }
  })
  if (loading || !data) {
    return <div>Loading</div>
  }

  const renderPosts = () => {
    return data.postGetAll.posts.map(({ threadTitle, createdAt, authorUsername }) => (
      <Post key={createdAt.toString()}>
        <div className='title'>{threadTitle}</div>
        <div className='details'>
          {authorUsername} - {timeLeft(createdAt)}
        </div>
      </Post>
    ))
  }

  return (
    <Posts>
      Son Gönderiler
      {renderPosts()}
    </Posts>
  )
}
