import * as React from 'react';
import { GetAllUsersComponent } from '../../../generated/apolloComponents';
import { UsersView } from './UsersView';

const Users: React.FunctionComponent = () => {
  return (
    <GetAllUsersComponent>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        if (data && data.userGetAll && data.userGetAll.users) {
          return <UsersView users={data.userGetAll.users} />;
        }
      }}
    </GetAllUsersComponent>
  );
};

export default Users;
