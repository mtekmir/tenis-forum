import * as React from 'react'
import {
  CategoryTitle,
  ForumDiv,
  ForumDivTitle,
  CategoryDiv,
  ForumDivStats,
  ForumDivStat,
} from './indexStyle'
import Link from 'next/link'
import { LatestPosts } from './components/latestPosts/LatestPosts'
import { useQuery } from 'react-apollo'
import { GET_CATEGORIES } from '../../graphql/query/getCategories'
import Layout from '../../components/Layout'
import { GetCategories } from '../../graphql/generated/GetCategories'

interface Props {}

const Index: React.FunctionComponent<Props> = () => {
  const { data, loading, error } = useQuery<GetCategories>(GET_CATEGORIES)

  if (loading || !data) {
    return <div>Loading</div>
  }

  const renderCategories = () => {
    return data.categoryGetAll.categories.map(
      ({ id, name, threadCount, postCount, forums }) => (
        <CategoryDiv key={id}>
          <CategoryTitle>{name}</CategoryTitle>
          {forums.map(({ id, name }) => (
            <ForumDiv key={id}>
              <ForumDivTitle>
                <Link href={`/forum/${id}`}>
                  <a>{name}</a>
                </Link>
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
            </ForumDiv>
          ))}
        </CategoryDiv>
      )
    )
  }

  return (
    <Layout title='Anasayfa | Tenis Forum'>
      {renderCategories()}
      <LatestPosts />
    </Layout>
  )
}

export default Index
