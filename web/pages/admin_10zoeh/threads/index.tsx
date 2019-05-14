import * as React from 'react';
import { GetAllThreadsComponent } from '../../../generated/apolloComponents';
import { ThreadsView } from './ThreadsView';

const ThreadsContainer: React.FunctionComponent = () => {
  return (
    <GetAllThreadsComponent>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        if (data && data.threadGetAll && data.threadGetAll.threads) {
          return <ThreadsView threads={data.threadGetAll.threads} />;
        }
      }}
    </GetAllThreadsComponent>
  );
};

export default ThreadsContainer;
