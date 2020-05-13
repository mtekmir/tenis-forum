import React, { Fragment } from 'react'
import {
  CategoryTitle,
  ForumDiv,
  ForumDivTitle,
  CategoryDiv,
  ForumDivStats,
  ForumDivStat,
  ForumDivLatestThread,
  ForumDivLatestThreadProfileImg,
  ForumDivTitleDiv,
} from './indexStyle'
import Link from 'next/link'
import { LatestPosts } from './components/latestPosts/LatestPosts'
import { useQuery } from 'react-apollo'
import { GET_CATEGORIES } from '../../graphql/query/getCategories'
import Layout from '../../components/Layout'
import { GetCategories } from '../../graphql/generated/GetCategories'
import { GET_LATEST_THREADS } from '../../graphql/query/getLatestThreads'
import { GetLatestThreads } from '../../graphql/generated/GetLatestThreads'
import { formatDate } from '../../utils/formatDate'
import Router from 'next/router'

interface Props {}

const Index: React.FunctionComponent<Props> = () => {
  const { data, loading, error } = useQuery<GetCategories>(GET_CATEGORIES)
  const { data: latestThreads } = useQuery<GetLatestThreads>(GET_LATEST_THREADS)

  if (loading || !data) {
    return <div>Loading</div>
  }

  const renderLatestThread = (forumId: number) => {
    return (
      latestThreads &&
      latestThreads.forumGetLastThreads
        .filter(t => t.forumId === forumId)
        .map(({ title, profileImageUrl, createdAt, id, username }) => (
          <ForumDivLatestThread>
            <ForumDivLatestThreadProfileImg src={profileImageUrl} />
            <div className='right'>
              <div className='title' onClick={() => Router.push(`/baslik/${id}`)}>
                {title}
              </div>
              <div className='user-date'>
                <span>{username}</span> - {formatDate(createdAt)}
              </div>
            </div>
          </ForumDivLatestThread>
        ))
    )
  }

  const renderCategories = () => {
    return data.categoryGetAll.categories.map(({ id, name, forums }) => (
      <CategoryDiv key={id}>
        <CategoryTitle>{name}</CategoryTitle>
        {forums.map(({ id, name, threadCount, postCount, description }) => (
          <ForumDiv key={id}>
            <ForumDivTitleDiv>
              <ForumDivTitle>
                <Link href={`/forum/${id}`}>
                  <a>{name}</a>
                </Link>
                <span>{description}</span>
              </ForumDivTitle>
              <ForumDivStats>
                <ForumDivStat>
                  <span>Basliklar</span>
                  {threadCount}
                </ForumDivStat>
                <ForumDivStat>
                  <span>Cevaplar</span>
                  {postCount}
                </ForumDivStat>
              </ForumDivStats>
            </ForumDivTitleDiv>
            {renderLatestThread(id)}
          </ForumDiv>
        ))}
      </CategoryDiv>
    ))
  }

  return (
    <Layout title='Anasayfa | Tenis Forum'>
      {renderCategories()}
      <LatestPosts />
    </Layout>
  )
}

export default Index
