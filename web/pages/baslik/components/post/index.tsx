import React, { Fragment, useState, useContext } from 'react'
import dompurify from 'dompurify'
import { format } from 'date-fns'
import { PostDiv } from './styles/PostDiv'
import { ProfileImage } from './styles/ProfileImage'
import { UserDiv } from './styles/UserDiv'
import { PostContentDiv, PostContentTopDiv, Divider } from './styles/PostContent'
import { Me_me } from '../../../../generated/Me'
import { PostBottomDiv } from './styles/BottomDiv'
import { PostContent } from './components/PostContent'
import { PostEditing } from './components/PostEditing'

interface Props {
  loggedInUser: Me_me | null
  postId: number
  index: number
  username: string
  text: string
  createdAt: Date
  profileImageUrl: string
  signature: string
  id: string
  page: number
  threadId: number
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
  return (
    <PostDiv id={postId.toString()}>
      <UserDiv>
        <ProfileImage src={profileImageUrl} />
        <div>{username}</div>
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
