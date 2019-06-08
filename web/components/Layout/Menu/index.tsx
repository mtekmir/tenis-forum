import * as React from 'react';
import { MenuContainer } from './styles';
import { ADMIN_MENU, MENU } from './menuItems';
import { MenuItem } from './components/menuItem';
import { Divider } from '../../Divider';
import { MeMe } from '../../../generated/apolloComponents';
import { withRouter, WithRouterProps } from 'next/router';

interface Props extends WithRouterProps {
  open: boolean;
  me: MeMe | null;
  closeMenu: () => void;
}

const MenuC: React.FC<Props> = ({ me, open, closeMenu, router }) => {
  const [openDropdowns, setOpenDropdowns] = React.useState<{
    [key: string]: boolean;
  }>({});

  const openDropdown = (index: number) => {
    setOpenDropdowns({ [index]: !openDropdowns[index] });
  };

  const renderContent = () => {
    const menu = router.pathname.split('/')[1].includes('admin')
      ? ADMIN_MENU
      : MENU;

    return menu.map(({ type, ...props }, idx) => {
      if (type === 'divider') {
        return <Divider key={type} />;
      }

      return (
        <MenuItem
          closeMenu={closeMenu}
          dropdownOpen={openDropdowns[idx]}
          idx={idx}
          openDropdown={openDropdown}
          key={props.label}
          {...props}
        />
      );
    });
  };

  return (
    <MenuContainer open={open}>
      {renderContent()}
      {me && (
        <React.Fragment>
          <Divider />
          <MenuItem
            dropdownOpen={false}
            url="/account"
            closeMenu={closeMenu}
            label="Hesabım"
          />
          <MenuItem
            dropdownOpen={false}
            url="/uyelik/cikis"
            closeMenu={closeMenu}
            label="Çıkış"
          />
        </React.Fragment>
      )}
    </MenuContainer>
  );
};

export const Menu = withRouter(MenuC);
