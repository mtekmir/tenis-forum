import * as React from 'react';
import {
  Button,
  Popover,
  Typography,
  Paper,
  IconButton,
  Select,
  MenuItem,
  ListItem,
  ListItemText,
  TextField,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import filterPopoverStyle from './filterPopoverStyle';
import { FilterOptions } from './filterOptions';

interface Props extends WithStyles<typeof filterPopoverStyle> {
  onAddFilter: (args: { [key: string]: any }) => void;
  type: string;
  name: string;
  filterCategory: string;
  options: FilterOptions[];
}

interface State {
  anchorEl: any;
  operator: string;
  value: string;
}

class FilterPopover extends React.Component<Props, State> {
  public readonly state: State = {
    anchorEl: null,
    operator: '>',
    value: '',
  };

  handleClick = (event: React.ChangeEvent<any>) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  }

  onInputChange = (name: string) => ({
    target: { value },
  }: React.ChangeEvent<any>) => {
    this.setState(state => ({
      ...state,
      [name]: value,
    }));
  }

  onAddFilter = () => {
    const { onAddFilter, filterCategory, type, name, options } = this.props;
    const { value, operator } = this.state;

    if (type === 'text') {
      onAddFilter({
        filterCategory,
        name,
        label: `${name} ${operator} ${value}`,
        value: `${operator} ${value}`,
      });
      return this.handleClose();
    }
    // @ts-ignore
    let { id } = options.find(o => o.name === value);
    if (!id) {
      id = value;
    }

    onAddFilter({
      filterCategory,
      name,
      label: `${name}: ${value}`,
      value: id,
    });
    this.handleClose();
  }

  renderContent = () => {
    const { type } = this.props;
    if (type === 'select') {
      const { options, classes } = this.props;
      return (
        <Select
          className={classes.selectField}
          value={this.state.value}
          onChange={this.onInputChange('value')}
        >
          {options.map(({ name }) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      );
    }

    if (type === 'text') {
      const { classes } = this.props;
      const { operator, value } = this.state;
      return (
        <React.Fragment>
          <Select
            className={classes.operatorSelect}
            value={operator}
            onChange={this.onInputChange('operator')}
          >
            {['>', '<', '='].map(o => (
              <MenuItem key={o} value={o}>
                {o}
              </MenuItem>
            ))}
          </Select>
          <TextField
            className={classes.textInput}
            value={value}
            type="number"
            onChange={this.onInputChange('value')}
          />
        </React.Fragment>
      );
    }
  }

  render() {
    const { classes, name } = this.props;
    const { anchorEl } = this.state;
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemText>
            <div>{name}</div>
          </ListItemText>
        </ListItem>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Paper className={classes.filterPopover}>
            <div className={classes.filterPopoverHeader}>
              <Typography style={{ color: 'white', paddingLeft: 8 }}>
                {name}
              </Typography>
              <IconButton onClick={this.handleClose}>
                <Cancel className={classes.filterPopoverCloseIcon} />
              </IconButton>
            </div>
            <div className={classes.filterPopoverContent}>
              {this.renderContent()}
            </div>
            <div className={classes.filterPopoverAction}>
              <Button
                className={classes.filterPopoverActionButton}
                onClick={() => this.onAddFilter()}
              >
                Apply
              </Button>
            </div>
          </Paper>
        </Popover>
      </React.Fragment>
    );
  }
}

export default withStyles(filterPopoverStyle)(FilterPopover);
