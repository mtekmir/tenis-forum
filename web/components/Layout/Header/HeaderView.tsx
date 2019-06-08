import React, { useState, useContext } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { AppBar } from './styles';
import { Menu } from '../Menu';
import { Row } from '../../grid/Row';
import { Col } from '../../grid/Col';
import { MenuIcon } from './components/MenuIcon';
import { Logo } from './components/Logo';
import { Container } from '../../grid/Container';
import { Account } from './components/account/AccountView';
import { UserContext } from '../../../context/userContext';

interface Props {}

export const HeaderView: React.FC<Props> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(UserContext);

  const openMenu = () => {
    setMenuOpen(true);
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    document.body.style.marginRight = `${scrollBarWidth}px`;
    document.body.style.overflowY = 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.marginRight = '0px';
    document.body.style.overflow = 'auto';
  };

  return (
    <OutsideClickHandler onOutsideClick={closeMenu}>
      <Menu open={menuOpen} closeMenu={closeMenu} me={user} />
      <AppBar onClick={() => menuOpen && closeMenu()}>
        <Container>
          <Row alignItems="center">
            <Col xs={8} sm={8} md={10} lg={10} xl={10.5}>
              <Logo>Tenis Forum</Logo>
            </Col>
            <Col
              xs={4}
              sm={4}
              md={2}
              lg={2}
              xl={1.5}
              alignItems="center"
              justifyContent="flex-end"
            >
              <Account me={user} />
              <MenuIcon
                openMenu={openMenu}
                closeMenu={closeMenu}
                open={menuOpen}
              />
            </Col>
          </Row>
        </Container>
      </AppBar>
    </OutsideClickHandler>
  );
};
