import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../../../../context/userContext'
import { BIG_MENU_ITEMS, BIG_ADMIN_MENU_ITEMS } from './menuItems'
import { BigMenuItem } from './bigMenuItem'
import { UserPermissions } from '../../../../../generated/globalTypes'

export const BigMenu: React.FC = () => {
  const { user } = useContext(UserContext)
  const menu =
    user && user.permissions.includes(UserPermissions.ADMIN)
      ? BIG_ADMIN_MENU_ITEMS
      : BIG_MENU_ITEMS

  return (
    <Styles>
      {menu.map(i => (
        <BigMenuItem {...i} key={i.label} />
      ))}
    </Styles>
  )
}

const Styles = styled.div`
  background: ${({ theme }) => theme.palette.primary};
  display: flex;
  width: 100vw;
`
