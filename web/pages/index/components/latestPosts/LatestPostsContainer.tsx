import React from 'react';
import { GetAllPostsComponent } from '../../../../generated/apolloComponents';
import { LatestPostsView } from './LatestPostsView';

export const LatestPostsContainer: React.FC = () => {
  return (
    <GetAllPostsComponent variables={{ limit: 5 }}>
      {({ data }) => {
        if (data && data.postGetAll) {
          return <LatestPostsView posts={data.postGetAll.posts} />;
        }
        return null;
      }}
    </GetAllPostsComponent>
  );
};
