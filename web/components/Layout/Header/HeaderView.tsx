import React, { Component } from 'react';
import { AppBar } from './styles';
import { Menu } from '../Menu';
import { MeMe } from '../../../generated/apolloComponents';
import { Row } from '../../grid/Row';
import { Col } from '../../grid/Col';
import { MenuIcon } from './components/MenuIcon';
import { Logo } from './components/Logo';
import { Container } from '../../grid/Container';
import { Account } from './components/account/AccountView';

interface Props {
  me: MeMe | null;
}

export class HeaderView extends Component<Props> {
  state = {
    menuOpen: false,
  };

  headerRef: any = null;

  openMenu = () => {
    this.setState(() => ({ menuOpen: true }));
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    document.body.style.marginRight = `${scrollBarWidth}px`;
    document.body.style.overflowY = 'hidden';
  }

  closeMenu = () => {
    this.setState(() => ({ menuOpen: false }));
    document.body.style.marginRight = '0px';
    document.body.style.overflow = 'auto';
  }

  render() {
    const { me } = this.props;
    const { menuOpen } = this.state;
    return (
      <div ref={el => (this.headerRef = el)}>
        <Menu
          open={menuOpen}
          closeMenu={this.closeMenu}
          outerRef={this.headerRef}
          me={me}
        />
        <AppBar onClick={() => menuOpen && this.closeMenu()}>
          <Container>
            <Row alignItems="center">
              <Col xs={9} sm={8} md={10} lg={10} xl={10.5}>
                <Logo open={menuOpen}>Tenis Forum</Logo>
              </Col>
              <Col xs={3} sm={4} md={2} lg={2} xl={1.5} alignItems="center">
                <Account me={me} />
                <MenuIcon
                  openMenu={this.openMenu}
                  closeMenu={this.closeMenu}
                  open={menuOpen}
                />
              </Col>
            </Row>
          </Container>
        </AppBar>
      </div>
    );
  }
}
