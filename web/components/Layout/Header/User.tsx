import * as React from 'react';
import { UserContextConsumer } from '../../../context/userContext';
import { Avatar } from '@material-ui/core';

interface Props {}
export const User: React.FunctionComponent<Props> = () => {
  return (
    <UserContextConsumer>
      {({ user }) => user && <Avatar>{user.username[0].toUpperCase()}</Avatar>}
    </UserContextConsumer>
  );
};
