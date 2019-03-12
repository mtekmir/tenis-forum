import * as React from 'react';
import { UserContextConsumer } from '../../../../context/userContext';
import { Avatar as Av, WithStyles, withStyles } from '@material-ui/core';
import avatarStyle from './avatarStyle';

interface Props extends WithStyles<typeof avatarStyle> {}
const AvatarC: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <UserContextConsumer>
      {({ user }) =>
        user && (
          <Av className={classes.avatar}>{user.username[0].toUpperCase()}</Av>
        )
      }
    </UserContextConsumer>
  );
};

export const Avatar = withStyles(avatarStyle)(AvatarC);
