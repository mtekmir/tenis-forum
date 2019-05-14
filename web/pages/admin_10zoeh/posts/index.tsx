import * as React from 'react';
import { GetAllPostsComponent } from '../../../generated/apolloComponents';
import { PostsView } from './PostsView';

const PostsContainer: React.FunctionComponent = () => {
  return (
    <GetAllPostsComponent>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        if (data && data.postGetAll && data.postGetAll.posts) {
          return <PostsView posts={data.postGetAll.posts} />;
        }
      }}
    </GetAllPostsComponent>
  );
};

export default PostsContainer;
