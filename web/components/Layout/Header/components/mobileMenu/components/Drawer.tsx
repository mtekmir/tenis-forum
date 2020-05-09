import React, { useContext } from 'react'
import styled from 'styled-components'
import { ADMIN_MENU, MENU } from '../../../menuItems'
import { MobileMenuItem } from './mobileMenuItem'
import { Divider } from '../../../../../Divider'
import { UserContext } from '../../../../../../context/userContext'
import { UserPermissions } from '../../../../../../graphql/generated/globalTypes'

interface Props {
  open: boolean
  closeMenu: () => void
}

export const Drawer: React.FC<Props> = ({ open, closeMenu }) => {
  const [openDropdowns, setOpenDropdowns] = React.useState<{
    [key: string]: boolean
  }>({})
  const { user } = useContext(UserContext)

  const openDropdown = (index: number) => {
    setOpenDropdowns({ [index]: !openDropdowns[index] })
  }

  const menu = user && user.permissions.includes(UserPermissions.ADMIN) ? ADMIN_MENU : MENU

  return (
    <DrawerStyles open={open}>
      {menu.map(({ type, ...props }, idx) => {
        if (type === 'divider') {
          return <Divider key={type} />
        }

        return (
          <MobileMenuItem
            closeMenu={closeMenu}
            dropdownOpen={openDropdowns[idx]}
            idx={idx}
            openDropdown={openDropdown}
            key={props.label}
            {...props}
          />
        )
      })}
    </DrawerStyles>
  )
}

const DrawerStyles = styled.div<{ open: boolean }>`
  padding: 6em 2em;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 90vh;
  transform: translateX(-100%);
  z-index: 3;
  transition: all 0.5s;
  ${props => props.open && 'transform: translateX(0)'};
  width: 100%;
`
