import * as React from 'react';
import {
  Avatar as Av,
  WithStyles,
  withStyles,
  IconButton,
  Popover,
} from '@material-ui/core';
import avatarStyle from './avatarStyle';
import { MeMe } from '../../../../generated/apolloComponents';
import { Person } from '@material-ui/icons';
import { UserPopover } from './userPopover';

interface Props extends WithStyles<typeof avatarStyle> {
  user: MeMe | undefined | null;
}
class AvatarC extends React.PureComponent<Props> {
  state = {
    anchorEl: null,
  };

  handlePopoverOpen = (event: React.ChangeEvent<any>) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  }

  renderPopover = () => {
    const { anchorEl } = this.state;
    const { user } = this.props;
    return (
      <Popover
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        onClose={this.handlePopoverClose}
      >
        <UserPopover onClose={this.handlePopoverClose} user={user} />
      </Popover>
    );
  }

  renderAvatar = () => {
    const { user, classes } = this.props;
    return user ? (
      <IconButton onClick={this.handlePopoverOpen}>
        <Av className={classes.avatar}>{user.username[0].toUpperCase()}</Av>
      </IconButton>
    ) : (
      <IconButton onClick={this.handlePopoverOpen}>
        <Person />
      </IconButton>
    );
  }

  render() {
    return (
      <div>
        {this.renderAvatar()}
        {this.renderPopover()}
      </div>
    );
  }
}

export const Avatar = withStyles(avatarStyle)(AvatarC);
