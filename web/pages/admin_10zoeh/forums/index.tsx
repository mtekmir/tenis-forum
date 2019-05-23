import React from 'react';
import {
  GetAllForumsComponent,
  GetForumForum,
} from '../../../generated/apolloComponents';
import { ForumsView } from './ForumsView';
import { ApolloConsumer } from 'react-apollo';

const ForumsContainer = () => {
  return (
    <ApolloConsumer>
      {client => (
        <GetAllForumsComponent>
          {({ data, loading }) => {
            if (loading) {
              return <div>Loading...</div>;
            }
            if (data && data.forumGetAll && data.forumGetAll.forums) {
              return (
                <ForumsView forums={data.forumGetAll.forums} client={client} />
              );
            }
          }}
        </GetAllForumsComponent>
      )}
    </ApolloConsumer>
  );
};

export default ForumsContainer;
