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
import { User } from './User';

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
          <Grid container>
            <Grid xs={5} item className={classes.leftContainer}>
              <Typography variant="title" color="inherit" noWrap>
                Tenis Forum
              </Typography>
            </Grid>
            <Grid xs={3} item>
              <User />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export const Header = withStyles(headerStyle)(HeaderC);
