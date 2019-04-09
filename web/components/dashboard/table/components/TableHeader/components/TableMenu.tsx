import * as React from 'react';
import {
  Button,
  MenuItem,
  Menu,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { CustomLink } from '../../../../../customLink';
import tableMenuStyle from './tableMenuStyle';
import { IMenuItem } from '../../..';

interface State {
  anchorEl: any;
}

interface Props extends WithStyles {
  menuItems: IMenuItem[];
}

class TableMenuC extends React.PureComponent<Props, State> {
  public readonly state: State = {
    anchorEl: null,
  };

  handleClick = (event: React.MouseEvent) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  renderMenuItems = () => {
    const { menuItems } = this.props;
    return menuItems.map(({ name, path }) => (
      <MenuItem
        key={name}
        onClick={this.handleClose}
        component={CustomLink(path)}
      >
        {name}
      </MenuItem>
    ));
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>
          <MenuIcon className={classes.menuIcon} />
        </Button>
        <Menu
          onClick={this.handleClose}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.renderMenuItems()}
        </Menu>
      </React.Fragment>
    );
  }
}

export const TableMenu = withStyles(tableMenuStyle)(TableMenuC);
