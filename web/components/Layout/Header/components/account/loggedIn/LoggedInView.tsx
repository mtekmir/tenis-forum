import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { TiUser } from 'react-icons/ti';
import { UserPopoverDiv, UserPopoverItem } from './components/UserPopover';
import { LoggedInDiv } from './styles';
import {
  MeMe,
  UserPermissions,
} from '../../../../../../generated/apolloComponents';

interface Props {
  me: MeMe;
}

export const LoggedInView: React.FC<Props> = ({ me }) => {
  const [popoverOpen, togglePopover] = React.useState(false);

  const handleTogglePopover = (state: boolean) => {
    togglePopover(state);
  };

  return (
    <LoggedInDiv>
      <OutsideClickHandler onOutsideClick={() => handleTogglePopover(false)}>
        <TiUser onClick={() => handleTogglePopover(!popoverOpen)} />
        <UserPopoverDiv open={popoverOpen}>
          <UserPopoverItem
            onClose={() => handleTogglePopover(false)}
            text="Hesabım"
            url="/hesabim"
          />
          <UserPopoverItem
            onClose={() => handleTogglePopover(false)}
            text="Çıkış"
            url="/uyelik/cikis"
          />
        </UserPopoverDiv>
      </OutsideClickHandler>
    </LoggedInDiv>
  );
};
