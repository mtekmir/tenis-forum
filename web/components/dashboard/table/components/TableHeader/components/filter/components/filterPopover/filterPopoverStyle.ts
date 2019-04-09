import { Theme } from '@material-ui/core';

export default ({ spacing: { unit } }: Theme) => ({
  filterPopover: {
    width: 220,
    height: 180,
  },
  filterPopoverHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#0085b2',
    padding: unit * 1,
  },
  filterPopoverCloseIcon: {
    color: 'white',
    padding: 0,
  },
  filterPopoverContent: {
    display: 'flex',
    justifyContent: 'center',
    padding: unit * 1,
  },
  filterPopoverAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: unit * 1,
    padding: unit * 1,
  },
  filterPopoverActionButton: {
    color: '#0085b2',
    fontWeight: 500,
  },
  selectField: {
    width: '90%',
  },
  operatorSelect: {
    width: '25%',
    marginLeft: '5%',
    marginRight: unit * 2,
  },
  textInput: {
    width: '65%',
    marginTop: 1,
  },
});
