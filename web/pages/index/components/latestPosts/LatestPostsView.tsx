import React from 'react';
import { GetAllPostsPosts } from '../../../../generated/apolloComponents';
import { Post } from './latestPostsStyle';
import { timeLeft } from '../../../../utils/timeLeft';

interface Props {
  posts: GetAllPostsPosts[];
}

export const LatestPostsView: React.FC<Props> = ({ posts }) => {
  const renderPosts = () => {
    return posts.map(({ threadTitle, createdAt, authorUsername }) => (
      <Post>
        <div className="title">{threadTitle}</div>
        <div className="details">
          {authorUsername} - {timeLeft(createdAt)}
        </div>
      </Post>
    ));
  };

  return (
    <>
      Son Gönderiler
      {renderPosts()}
    </>
  );
};
