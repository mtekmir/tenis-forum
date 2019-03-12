import * as React from 'react';
import {
  Drawer,
  Divider,
  withStyles,
  ListItemText,
  Hidden,
  List,
  ListItem,
  Collapse,
  WithStyles,
} from '@material-ui/core';
import drawerStyle from './drawerStyle';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { MENU } from './menuItems';
import Link from 'next/link';
import { Header } from '../Header';
import { withRouter, WithRouterProps } from 'next/router';
import { UserContextConsumer } from '../../../context/userContext';
import { MeMe } from '../../../generated/apolloComponents';

interface Props extends WithStyles<typeof drawerStyle>, WithRouterProps {}
interface State {
  mobileOpen: boolean;
  [key: string]: any;
}

const CustomLink = (pathname?: string) => (props: any) => {
  return (
    <Link href={{ pathname }}>
      <a {...props}>{props.children}</a>
    </Link>
  );
};

class DrawerC extends React.PureComponent<Props, State> {
  public readonly state: State = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }

  handleMenuClick = (index: number) => {
    this.setState(state => ({ [index]: !state[index] }));
  }

  handleCloseMenu = () => {
    this.setState(() => ({ mobileOpen: false }));
  }

  renderMenu = () => {
    const { classes, router } = this.props;
    // @ts-ignore
    const { pathname } = router;
    return MENU.map(({ text, url, subMenus, rootUrl }, index) => {
      if (subMenus) {
        return (
          <React.Fragment key={text}>
            <ListItem
              selected={
                !this.state[index] && (pathname as any).includes(rootUrl)
              }
              button
              onClick={() => this.handleMenuClick(index)}
            >
              <ListItemText inset primary={text} />
              {this.state[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {subMenus.map(({ url: subUrl, text: subText }) => (
              <div
                onClick={() => this.handleCloseMenu()}
                key={subText}
                className={classes.subMenuItem}
              >
                <Collapse
                  className={classes.subMenuContent}
                  component={CustomLink(subUrl)}
                  in={this.state[index]}
                  timeout={0}
                  unmountOnExit
                >
                  <List disablePadding>
                    <ListItem button selected={pathname === subUrl}>
                      <ListItemText inset primary={subText} />
                    </ListItem>
                  </List>
                </Collapse>
              </div>
            ))}
          </React.Fragment>
        );
      }
      return (
        <ListItem
          onClick={() => this.handleCloseMenu()}
          key={text}
          selected={pathname === url}
          component={CustomLink(url)}
        >
          <ListItemText inset primary={text} />
        </ListItem>
      );
    });
  }

  signOut = (user?: MeMe) => {
    return (
      user && (
        <ListItem button>
          <ListItemText inset primary="Sign Out" />
        </ListItem>
      )
    );
  }

  render() {
    const { classes, children } = this.props;
    const { mobileOpen } = this.state;

    return (
      <UserContextConsumer>
        {({ user }) => (
          <div className={classes.root}>
            <Header handleDrawerToggle={this.handleDrawerToggle} />
            <React.Fragment>
              <Hidden lgUp implementation="css">
                <Drawer
                  variant="temporary"
                  open={mobileOpen}
                  onClose={this.handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                  <List component="nav">
                    <div className={classes.toolbar} />
                    {this.renderMenu()}
                    <Divider />
                    {this.signOut(user)}
                  </List>
                </Drawer>
              </Hidden>
              <Hidden mdDown implementation="css">
                <Drawer
                  variant="permanent"
                  open
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <List component="nav">
                    <div className={classes.toolbar} />
                    {this.renderMenu()}
                    <Divider />
                    {this.signOut(user)}
                  </List>
                </Drawer>
              </Hidden>
            </React.Fragment>

            <main className={classes.content}>
              <div className={classes.toolbar} />
              {children}
            </main>
          </div>
        )}
      </UserContextConsumer>
    );
  }
}

export const DrawerWrapper = withStyles(drawerStyle)(withRouter(DrawerC));
