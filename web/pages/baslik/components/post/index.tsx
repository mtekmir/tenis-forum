import React, { useState, useContext } from 'react'
import dompurify from 'dompurify'
import { PostDiv } from './styles/PostDiv'
import { ProfileImage } from './styles/ProfileImage'
import { UserDiv } from './styles/UserDiv'
import { Me_me } from '../../../../graphql/generated/Me'
import { PostContent } from './components/PostContent'
import { PostEditing } from './components/PostEditing'
import { isAdmin } from '../../../../utils/isAdmin'
import { UnderlinedButton } from '../../../../components/Button'
import { Align } from '../../../../components/Align'
import { DELETE_POST } from '../../../../graphql/mutation/admin/deletePost'
import { useMutation } from 'react-apollo'
import {
  GetThreadPosts,
  GetThreadPostsVariables,
} from '../../../../graphql/generated/GetThreadPosts'
import { GET_THREAD_POSTS } from '../../../../graphql/query/getThreadPosts'

interface Props {
  loggedInUser: Me_me | null
  postId: number
  index: number
  username: string
  text: string
  createdAt: Date
  updatedAt: Date
  profileImageUrl: string
  signature: string
  id: string
  page: number
  threadId: number
  openReportPostModal: (id: number) => void
}

const sanitizer = dompurify.sanitize
export const Post: React.FunctionComponent<Props> = ({
  postId,
  username,
  profileImageUrl,
  page,
  threadId,
  ...rest
}) => {
  const [editing, setEditing] = useState(false)
  const [deletePost] = useMutation(DELETE_POST, {
    update(cache, _) {
      const { threadGetPosts } = cache.readQuery<GetThreadPosts>({
        query: GET_THREAD_POSTS,
        variables: { threadId: threadId.toString(), page },
      })

      cache.writeQuery<GetThreadPosts, GetThreadPostsVariables>({
        query: GET_THREAD_POSTS,
        variables: { threadId: threadId.toString(), page },
        data: {
          threadGetPosts: {
            ...threadGetPosts,
            posts: threadGetPosts.posts.filter(p => p.id !== postId),
          },
        },
      })
    },
  })

  return (
    <PostDiv id={postId.toString()}>
      <UserDiv>
        <Align vertical>
          <Align>
            <ProfileImage src={profileImageUrl} />
            <div>{username}</div>
          </Align>
          <Align width={1} padding='0.5em 0 0 0'>
            {isAdmin(rest.loggedInUser) && (
              <UnderlinedButton onClick={() => deletePost({ variables: { id: postId } })}>
                Sil
              </UnderlinedButton>
            )}
          </Align>
        </Align>
      </UserDiv>
      {editing ? (
        <PostEditing
          text={rest.text}
          sanitizer={sanitizer}
          setEditing={setEditing}
          postId={postId}
          page={page}
          threadId={threadId}
        />
      ) : (
        <PostContent {...rest} sanitizer={sanitizer} postId={postId} setEditing={setEditing} />
      )}
    </PostDiv>
  )
}
