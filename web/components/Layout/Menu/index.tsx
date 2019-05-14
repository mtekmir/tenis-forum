import * as React from 'react';
import { MenuContainer } from './styles';
import { ADMIN_MENU, MENU } from './menuItems';
import { MenuItem } from './components/menuItem';
import { Divider } from '../../Divider';
import { MeMe } from '../../../generated/apolloComponents';
import { withRouter, WithRouterProps } from 'next/router';

interface State {
  [key: string]: boolean;
}

interface Props extends WithRouterProps {
  open: boolean;
  me: MeMe | null;
  outerRef: any;
  closeMenu: () => void;
}

class MenuC extends React.Component<Props, State> {
  state: State = {};

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  openDropdown = (index: number) => {
    this.setState(state => ({ [index]: !state[index] }));
  }

  handleClickOutside = (event: any) => {
    const { outerRef, closeMenu } = this.props;
    if (outerRef && !outerRef.contains(event.target)) {
      closeMenu();
    }
  }

  renderContent = () => {
    const { closeMenu, router } = this.props;
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
          dropdownOpen={this.state[idx]}
          idx={idx}
          openDropdown={this.openDropdown}
          key={props.label}
          {...props}
        />
      );
    });
  }

  render() {
    const { open, me, closeMenu } = this.props;
    return (
      <div>
        <MenuContainer open={open}>
          {this.renderContent()}
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
      </div>
    );
  }
}

export const Menu = withRouter(MenuC);
