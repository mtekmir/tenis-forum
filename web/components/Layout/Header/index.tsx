import * as React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  WithStyles,
  withStyles,
  Grid,
} from '@material-ui/core';
import headerStyle from './headerStyle';
import { Avatar } from './avatar';

interface Props extends WithStyles<typeof headerStyle> {
  handleDrawerToggle: () => void;
}

class HeaderC extends React.PureComponent<Props> {
  render() {
    const { classes, handleDrawerToggle } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <React.Fragment>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
          </React.Fragment>
          <Grid container className={classes.headerContainer}>
            <Grid xs={10} item>
              <Typography variant="h6" color="inherit" noWrap>
                Tenis Forum
              </Typography>
            </Grid>
            <Grid xs={2} item>
              <Avatar />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export const Header = withStyles(headerStyle)(HeaderC);
