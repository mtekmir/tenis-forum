import { Theme } from '@material-ui/core';

export default ({ spacing: { unit }, breakpoints }: Theme) => ({
  editorDiv: {
    [breakpoints.up('md')]: {
      width: '60%',
    },
    [breakpoints.down('sm')]: {
      width: '100%',
      padding: unit,
    },
    width: '90%',
    margin: '0 auto',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: unit * 2,
  },
});
