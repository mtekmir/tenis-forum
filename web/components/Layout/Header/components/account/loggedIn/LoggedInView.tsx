import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { TiUser } from 'react-icons/ti'
import { UserPopoverDiv, UserPopoverItem } from './components/UserPopover'
import { LoggedInDiv } from './styles'
import { ADMIN_MENU_ITEMS, USER_MENU_ITEMS } from './loggedInMenuItems'
import { Me_me } from '../../../../../../generated/Me'
import { UserPermissions } from '../../../../../../generated/globalTypes'

interface Props {
  me: Me_me
}

export const LoggedInView: React.FC<Props> = ({ me }) => {
  const [popoverOpen, togglePopover] = useState(false)

  const handleTogglePopover = (state: boolean) => {
    togglePopover(state)
  }

  const renderMenu = () => {
    const menuItems = me.permissions.includes(UserPermissions.ADMIN)
      ? ADMIN_MENU_ITEMS
      : USER_MENU_ITEMS

    return menuItems.map(({ label, url }) => (
      <UserPopoverItem
        key={label}
        text={label}
        url={url}
        onClose={() => togglePopover(false)}
      />
    ))
  }

  return (
    <LoggedInDiv>
      <OutsideClickHandler onOutsideClick={() => handleTogglePopover(false)}>
        <TiUser onClick={() => handleTogglePopover(!popoverOpen)} />
        <UserPopoverDiv open={popoverOpen}>{renderMenu()}</UserPopoverDiv>
      </OutsideClickHandler>
    </LoggedInDiv>
  )
}
