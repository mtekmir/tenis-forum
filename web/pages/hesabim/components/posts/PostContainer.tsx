import React, { useContext } from 'react';
import { UserContext } from '../../../../context/userContext';
import {
  GetAllPostsComponent,
  FilterBy,
} from '../../../../generated/apolloComponents';
import { PostsView } from './PostsView';

interface Props {}
export const PostsContainer: React.FC<Props> = () => {
  const { user } = useContext(UserContext);

  return (
    <GetAllPostsComponent variables={{ id: user.id, filterBy: FilterBy.User }}>
      {({ data }) => {
        if (data && data.postGetAll) {
          return <PostsView posts={data.postGetAll.posts} />;
        }

        return null;
      }}
    </GetAllPostsComponent>
  );
};
