import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../../../../context/userContext'
import { BIG_MENU_ITEMS, BIG_ADMIN_MENU_ITEMS } from './menuItems'
import { BigMenuItem } from './bigMenuItem'
import { UserPermissions } from '../../../../../generated/globalTypes'
import { Account } from '../account'
import { Align } from '../../../../Align'

interface Props {
  width: number
}

export const BigMenu: React.FC<Props> = ({ width }) => {
  const { user } = useContext(UserContext)
  const menu =
    user && user.permissions.includes(UserPermissions.ADMIN)
      ? BIG_ADMIN_MENU_ITEMS
      : BIG_MENU_ITEMS

  return (
    <Styles>
      <Align>
        {menu.map(i => (
          <BigMenuItem {...i} key={i.label} />
        ))}
      </Align>
      <Account width={width} />
    </Styles>
  )
}

const Styles = styled.div`
  background: ${({ theme }) => theme.palette.primary};
  display: flex;
  justify-content: space-between;
`
