import * as React from 'react';
import {
  withStyles,
  WithStyles,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import userPopoverStyle from './userPopoverStyle';
import { MeMe } from '../../../../../generated/apolloComponents';
import { USER_POPOVER_ITEMS } from './userPopoverItems';
import { CustomLink } from '../../../../customLink';

interface Props extends WithStyles<typeof userPopoverStyle> {
  user: MeMe | undefined | null;
}

const UserPopoverC: React.FunctionComponent<Props> = ({ user, classes }) => {
  const renderMenuItems = () => {
    const menuItems = USER_POPOVER_ITEMS[user ? 'loggedIn' : 'notLoggedIn'];
    return menuItems.map(({ label, url }, idx) => (
      <ListItem
        className={classes.listItem}
        component={CustomLink(url)}
        key={idx}
        button
      >
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary={label}
        />
      </ListItem>
    ));
  };

  return <List className={classes.list}>{renderMenuItems()}</List>;
};

export const UserPopover = withStyles(userPopoverStyle)(UserPopoverC);
