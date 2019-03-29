import { Theme } from '@material-ui/core';

export default ({ spacing: { unit }, breakpoints }: Theme) => ({
  root: {
    padding: unit * 5,
    margin: unit,
    [breakpoints.up('md')]: {
      width: '60%',
    },
  },
  titleDiv: {
    marginBottom: unit * 2,
  },
  bottomDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: unit * 2,
  },
  btn: {
    marginLeft: unit * 2,
  },
});
