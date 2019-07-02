import React from 'react';
import { GetAllPostsPosts } from '../../../../generated/apolloComponents';
import { Post, Posts } from './latestPostsStyle';
import { timeLeft } from '../../../../utils/timeLeft';

interface Props {
  posts: GetAllPostsPosts[];
}

export const LatestPostsView: React.FC<Props> = ({ posts }) => {
  const renderPosts = () => {
    return posts.map(({ threadTitle, createdAt, authorUsername }) => (
      <Post key={createdAt}>
        <div className="title">{threadTitle}</div>
        <div className="details">
          {authorUsername} - {timeLeft(createdAt)}
        </div>
      </Post>
    ));
  };

  return (
    <Posts>
      Son Gönderiler
      {renderPosts()}
    </Posts>
  );
};
