import React, { FC } from 'react'
import { GetForum_forumGet_forum_threads_owner } from '../../../../graphql/generated/GetForum'
import Link from 'next/link'
import {
  ThreadContainer,
  OwnerAndDate,
  ThreadTitleContainer,
  ThreadLatestPostProfileImg,
  ThreadLatestPostContainer,
  ThreadLatestPostOwnerAndDate,
  ThreadStatsContainer,
  ThreadStat,
} from './style'
import { formatDate } from '../../../../utils/formatDate'
import { GetLatestPosts_threadGetLastPosts } from '../../../../graphql/generated/GetLatestPosts'
import Router from 'next/router'

interface Props {
  id: number
  title: string
  owner: GetForum_forumGet_forum_threads_owner
  postCount: number
  createdAt: Date
  latestPost?: GetLatestPosts_threadGetLastPosts
}

export const ForumThread: FC<Props> = ({
  id,
  title,
  owner,
  createdAt,
  postCount,
  latestPost,
}) => {
  return (
    <ThreadContainer key={id}>
      <img src={owner.profileImageUrl} className='thread_owner_img' />
      <ThreadTitleContainer>
        <Link href={`/baslik/${id}`}>
          <a>{title}</a>
        </Link>
        <OwnerAndDate>
          <div>{owner.username}</div>
          &#183;
          <div>{formatDate(createdAt)}</div>
        </OwnerAndDate>
      </ThreadTitleContainer>
      <ThreadStatsContainer>
        <ThreadStat>
          <span>Cevaplar</span>
          {postCount}
        </ThreadStat>
      </ThreadStatsContainer>
      {latestPost && (
        <ThreadLatestPostContainer
          onClick={() => Router.push(`/baslik/${id}#${latestPost.id}`)}>
          <ThreadLatestPostProfileImg src={latestPost.profileImageUrl} />
          <ThreadLatestPostOwnerAndDate>
            <span>{formatDate(latestPost.createdAt)}</span>
            {latestPost.username}
          </ThreadLatestPostOwnerAndDate>
        </ThreadLatestPostContainer>
      )}
    </ThreadContainer>
  )
}
