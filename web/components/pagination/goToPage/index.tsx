import * as React from 'react';
import {
  withStyles,
  WithStyles,
  Typography,
  Popover,
  Divider,
  IconButton,
  Button,
  Input,
} from '@material-ui/core';
import goToPageStyle from './goToPageStyle';
import { Add, Remove } from '@material-ui/icons';

interface Props extends WithStyles<typeof goToPageStyle> {
  pageCount: number;
  pagePrefix: number;
  onPageChange: (page: number) => void;
}

interface State {
  anchorEl: any;
  pageInput: number;
}

class GoToPageC extends React.PureComponent<Props, State> {
  public readonly state: State = {
    anchorEl: null,
    pageInput: 1,
  };

  openModal = (event: any) => {
    const { pagePrefix } = this.props;
    this.setState({
      anchorEl: event.currentTarget,
      pageInput: pagePrefix,
    });
  }

  closeModal = () => {
    this.setState({
      anchorEl: null,
    });
  }

  changePage = (change: number) => {
    const { pageInput } = this.state;
    if (pageInput === 1 && change === -1) {
      return;
    }

    if (pageInput + change > this.props.pageCount) {
      return;
    }
    this.setState(state => ({
      pageInput: state.pageInput + change,
    }));
  }

  handleGo = () => {
    this.setState({
      anchorEl: null,
    });
    this.props.onPageChange(this.state.pageInput);
  }

  render() {
    const { classes } = this.props;
    const { anchorEl, pageInput } = this.state;
    return (
      <React.Fragment>
        <div className={classes.pageButton} onClick={this.openModal}>
          <Typography>...</Typography>
        </div>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.closeModal}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <div className={classes.goToPageContainer}>
            <div>
              <Typography color="primary" variant="body1">
                Sayfaya Git
              </Typography>
              <Divider />
            </div>
            <div className={classes.goToPageBottomDiv}>
              <Input
                value={pageInput}
                classes={{
                  root: classes.goToPageInput,
                  input: classes.goToPageInput_input,
                }}
                color="primary"
                type="number"
                onChange={e =>
                  this.setState({ pageInput: parseInt(e.target.value, 10) })
                }
                disableUnderline
              />
              <IconButton onClick={() => this.changePage(1)}>
                <Add />
              </IconButton>
              <IconButton onClick={() => this.changePage(-1)}>
                <Remove />
              </IconButton>
              <Button
                size="large"
                color="primary"
                variant="contained"
                classes={{ text: classes.goToPageBtnText }}
                onClick={() => this.handleGo()}
              >
                Git
              </Button>
            </div>
          </div>
        </Popover>
      </React.Fragment>
    );
  }
}

export const GoToPage = withStyles(goToPageStyle)(GoToPageC);
