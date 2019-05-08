import { format } from 'date-fns';
import * as React from 'react';
import {
  GetForumForumGet,
  GetForumQuery,
} from '../../generated/apolloComponents';
import Link from 'next/link';
import Layout from '../../components/Layout';
import {
  ForumDiv,
  OwnerAndDate,
  TopDiv,
  ForumTitle,
  Breadcrumbs,
  TitleDiv,
} from './forumStyle';
import { Pagination } from '../../components/pagination';
import { FetchMoreOptions, FetchMoreQueryOptions } from 'apollo-boost';
import { Button } from '../../components/Button';

interface Props {
  forum: GetForumForumGet;
  fetchMore: (
    opts: FetchMoreOptions & FetchMoreQueryOptions<GetForumQuery, any>,
  ) => void;
}
export const ForumView: React.FunctionComponent<Props> = ({
  forum: { forum, threadCount },
  fetchMore,
}) => {
  const renderThreads = () => {
    return forum.threads.map(({ id, title, owner, createdAt }) => (
      <ForumDiv key={id}>
        <Link href={`/baslik/${id}`}>
          <a>{title}</a>
        </Link>
        <OwnerAndDate>
          <div>{owner.username}</div>
          &#183;
          <div>{format(createdAt, 'MMM DD, YYYY')}</div>
        </OwnerAndDate>
      </ForumDiv>
    ));
  };

  const handleFetchMore = (offset: number) => {
    fetchMore({
      variables: { id: forum.id, offset },
      updateQuery: (prevRes, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prevRes;
        }

        return fetchMoreResult;
      },
    });
  };

  return (
    <Layout title={`${forum.name} | Tenis Forum`}>
      <div>
        <TopDiv>
          <TitleDiv>
            <Breadcrumbs>Forum > {forum.category.name} ></Breadcrumbs>
            <ForumTitle>{forum.name}</ForumTitle>
          </TitleDiv>
          <Button
            color="primary"
            url={`/forum/${forum.id}/baslik/yeni`}
            text="Yeni Başlık"
          />
        </TopDiv>
        <Pagination
          count={threadCount}
          getRows={offset => handleFetchMore(offset)}
        />
      </div>
      {renderThreads()}
    </Layout>
  );
};
