import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { TiUser } from 'react-icons/ti';
import { UserPopoverDiv, UserPopoverItem } from './components/UserPopover';
import { LoggedInDiv } from './styles';
import {
  MeMe,
  UserPermissions,
} from '../../../../../../generated/apolloComponents';
import { ADMIN_MENU_ITEMS, USER_MENU_ITEMS } from './loggedInMenuItems';

interface Props {
  me: MeMe;
}

export const LoggedInView: React.FC<Props> = ({ me }) => {
  const [popoverOpen, togglePopover] = useState(false);

  const handleTogglePopover = (state: boolean) => {
    togglePopover(state);
  };

  const renderMenu = () => {
    const menuItems = me.permissions.includes(UserPermissions.Admin)
      ? ADMIN_MENU_ITEMS
      : USER_MENU_ITEMS;

    return menuItems.map(({ label, url }) => (
      <UserPopoverItem
        key={label}
        text={label}
        url={url}
        onClose={() => togglePopover(false)}
      />
    ));
  };

  return (
    <LoggedInDiv>
      <OutsideClickHandler onOutsideClick={() => handleTogglePopover(false)}>
        <TiUser onClick={() => handleTogglePopover(!popoverOpen)} />
        <UserPopoverDiv open={popoverOpen}>{renderMenu()}</UserPopoverDiv>
      </OutsideClickHandler>
    </LoggedInDiv>
  );
};
