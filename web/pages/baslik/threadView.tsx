import * as React from 'react';
import { PostsDiv, UserDiv, UserDivDate, ThreadTitle } from './threadStyle';
import {
  GetThreadThreadGet,
  GetThreadQuery,
} from '../../generated/apolloComponents';
import { TiUser, TiCalendarOutline } from 'react-icons/ti';
import Layout from '../../components/Layout';
import { Post } from './post';
import { format } from 'date-fns';
import { NewPostContainer } from '../../components/newPost';
import { FetchMoreOptions, FetchMoreQueryOptions } from 'apollo-boost';
import { Pagination } from '../../components/pagination';
import { Paper } from '../../components/Paper';

interface Props {
  thread: GetThreadThreadGet;
  fetchMore: (
    opts: FetchMoreOptions & FetchMoreQueryOptions<GetThreadQuery, any>,
  ) => void;
}

export const ThreadView: React.FunctionComponent<Props> = ({
  thread: {
    thread: { owner, posts, title, ...rest },
    postCount,
  },
  fetchMore,
}) => {
  const renderPosts = () => {
    return posts.map(({ author, text, id, createdAt }, idx) => (
      <Post
        username={author.username}
        profileImageUrl={author.profileImageUrl}
        createdAt={createdAt}
        text={text}
        key={id}
        index={idx + 2}
      />
    ));
  };

  const handleFetchMore = (offset: number) => {
    fetchMore({
      variables: { id: rest.id, offset },
      updateQuery: (prevRes, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prevRes;
        }

        return fetchMoreResult;
      },
    });
  };

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
        <Pagination
          count={postCount}
          getRows={offset => handleFetchMore(offset)}
        />
        {renderPosts()}
        <NewPostContainer threadId={rest.id} />
      </PostsDiv>
    </Layout>
  );
};
