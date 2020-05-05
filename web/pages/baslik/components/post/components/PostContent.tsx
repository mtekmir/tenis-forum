import React, { FC, Fragment } from 'react'

import { PostContentDiv, PostContentTopDiv, Divider } from '../styles/PostContent'
import { Me_me } from '../../../../../generated/Me'
import { formatDateWithTime, diffInMin } from '../../../../../utils/formatDate'
import { UnderlinedButton } from '../../../../../components/Button'
import { Align } from '../../../../../components/Align'

interface Props {
  loggedInUser: Me_me | null
  postId: number
  index: number
  text: string
  createdAt: Date
  updatedAt: Date
  signature: string
  id: string
  setEditing: (e: boolean) => void
  sanitizer: (s: string) => string
}

export const PostContent: FC<Props> = ({
  id,
  createdAt,
  updatedAt,
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
        <span>
          {formatDateWithTime(updatedAt)}{' '}
          {diffInMin(updatedAt, createdAt) > 1 ? '(Degistirildi)' : null}
        </span>
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
      <Align align='center' padding='2em 0 0.2em 0'>
        <UnderlinedButton>Rapor et</UnderlinedButton>
        {loggedInUser && loggedInUser.id === id && (
          <UnderlinedButton onClick={() => setEditing(true)}>Duzenle</UnderlinedButton>
        )}
      </Align>
    </PostContentDiv>
  )
}
