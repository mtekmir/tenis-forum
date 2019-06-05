import * as React from 'react';
import { GetThreadComponent } from '../../generated/apolloComponents';
import { LinearProgress } from '@material-ui/core';
import { ThreadView } from './threadView';
import { AppContext } from '../../context/AppContext';

const ThreadContainer = ({ id }: { id: string }) => {
  return (
    <GetThreadComponent variables={{ id }}>
      {({ data, loading, fetchMore }) => {
        if (loading) {
          return <LinearProgress />;
        }

        if (data && data.threadGet) {
          return <ThreadView fetchMore={fetchMore} thread={data.threadGet} />;
        }
      }}
    </GetThreadComponent>
  );
};

ThreadContainer.getInitialProps = ({ query: { id } }: AppContext) => {
  return { id };
};

export default ThreadContainer;
