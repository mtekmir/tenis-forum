import * as React from 'react';
import { GetForumComponent } from '../../generated/apolloComponents';
import { LinearProgress } from '@material-ui/core';
import { ForumView } from './ForumView';
import { AppContext } from '../../context/AppContext';

const ForumContainer = ({ id }: { id: string }) => {
  return (
    <GetForumComponent variables={{ id: parseInt(id, 10) }}>
      {({ data, loading, fetchMore }) => {
        if (loading) {
          return <LinearProgress />;
        }

        if (data && data.forumGet) {
          return <ForumView fetchMore={fetchMore} forum={data.forumGet} />;
        }
      }}
    </GetForumComponent>
  );
};

ForumContainer.getInitialProps = ({ query: { id } }: AppContext) => {
  return { id };
};

export default ForumContainer;
