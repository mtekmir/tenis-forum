import React, { useContext } from 'react';
import { UserContext } from '../../../../context/userContext';
import {
  GetAllThreadsComponent,
  FilterBy,
} from '../../../../generated/apolloComponents';
import { ThreadsView } from './ThreadsView';

interface Props {}

export const ThreadsContainer: React.FC<Props> = () => {
  const { user } = useContext(UserContext);

  return (
    <GetAllThreadsComponent
      variables={{ id: user.id, filterBy: FilterBy.User }}
    >
      {({data }) => {
        if (data && data.threadGetAll) {
          return <ThreadsView threads={data.threadGetAll.threads} />
        }

        return null;
      }}
    </GetAllThreadsComponent>
  );
};
