import * as React from 'react'
import { MenuContainer } from './styles'
import { ADMIN_MENU, MENU, MenuItem } from '../Header/menuItems'
import { MobileMenuItem } from '../Header/components/mobileMenu/components/mobileMenuItem'
import { Divider } from '../../Divider'
import { BigMenuItem } from '../Header/components/bigMenu/bigMenuItem'
import { Me_me } from '../../../graphql/generated/Me'
import { UserPermissions } from '../../../graphql/generated/globalTypes'

interface Props {
  open: boolean
  me: Me_me | null
  closeMenu: () => void
  width: number
}

export const Menu: React.FC<Props> = ({ me, open, closeMenu, width }) => {
  const [openDropdowns, setOpenDropdowns] = React.useState<{
    [key: string]: boolean
  }>({})

  const openDropdown = (index: number) => {
    setOpenDropdowns({ [index]: !openDropdowns[index] })
  }

  const renderContent = () => {
    const menu = me && me.permissions.includes(UserPermissions.ADMIN) ? ADMIN_MENU : MENU

    if (width > 599) {
      const menuWithoutSubs = (m: MenuItem[], res: MenuItem[] = []): MenuItem[] => {
        if (!m || !m.length) return res.filter(({ label }) => label)
        else if (m[0].subMenus && m[0].subMenus.length) {
          return menuWithoutSubs([...m[0].subMenus, ...m.slice(1)], res)
        } else {
          return menuWithoutSubs(m.slice(1), [...res, m[0]])
        }
      }

      return menuWithoutSubs(menu).map(m => <BigMenuItem key={m.label} {...m} />)
    }

    return menu.map(({ type, ...props }, idx) => {
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
    })
  }

  return (
    <MenuContainer open={open}>
      {renderContent()}
      {me && (
        <React.Fragment>
          <Divider />
          <MobileMenuItem
            dropdownOpen={false}
            url='/account'
            closeMenu={closeMenu}
            label='Hesabım'
          />
          <MobileMenuItem
            dropdownOpen={false}
            url='/uyelik/cikis'
            closeMenu={closeMenu}
            label='Çıkış'
          />
        </React.Fragment>
      )}
    </MenuContainer>
  )
}
