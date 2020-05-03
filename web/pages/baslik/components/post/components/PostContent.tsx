import React, { FC, Fragment } from 'react'
import { format } from 'date-fns'

import { PostContentDiv, PostContentTopDiv, Divider } from '../styles/PostContent'
import { PostBottomDiv } from '../styles/BottomDiv'
import { Me_me } from '../../../../../generated/Me'

interface Props {
  loggedInUser: Me_me | null
  postId: number
  index: number
  text: string
  createdAt: Date
  signature: string
  id: string
  setEditing: (e: boolean) => void
  sanitizer: (s: string) => string
}

export const PostContent: FC<Props> = ({
  id,
  createdAt,
  loggedInUser,
  postId,
  signature,
  text,
  index,
  setEditing,
  sanitizer,
}) => {
  return (
    <PostContentDiv>
      <PostContentTopDiv>
        <span>{format(createdAt, 'MMM DD, YYYY')}</span>
        <span># {index}</span>
      </PostContentTopDiv>
      <Divider />
      <div className='post-content' dangerouslySetInnerHTML={{ __html: sanitizer(text) }} />
      {signature && (
        <Fragment>
          <Divider />
          {signature}
        </Fragment>
      )}
      <PostBottomDiv>
        <span>Rapor et</span>
        {loggedInUser && loggedInUser.id === id && (
          <span onClick={() => setEditing(true)}>Duzenle</span>
        )}
      </PostBottomDiv>
    </PostContentDiv>
  )
}
