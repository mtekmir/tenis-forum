import React from 'react';
import { GetAllForumsComponent } from '../../../generated/apolloComponents';
import { ForumsView } from './ForumsView';

const ForumsContainer = () => {
  return (
    <GetAllForumsComponent>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }
        if (data && data.forumGetAll && data.forumGetAll.forums) {
          return <ForumsView forums={data.forumGetAll.forums} />;
        }
      }}
    </GetAllForumsComponent>
  );
};

export default ForumsContainer;
