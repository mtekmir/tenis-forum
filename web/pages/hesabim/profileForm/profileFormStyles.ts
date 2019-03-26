import { Theme } from '@material-ui/core';

export default ({ spacing, breakpoints }: Theme) => ({
  label: {
    fontWeight: 600,
    marginTop: spacing.unit * 2,
  },
  input: {
    [breakpoints.down('md')]: {
      width: '100%',
    },
    [breakpoints.up('md')]: {
      width: '60%',
    },
    [breakpoints.up('lg')]: {
      width: '40%',
    },
  },
  selectWidth: {
    [breakpoints.down('md')]: {
      width: '100%',
    },
    [breakpoints.up('md')]: {
      width: '60%',
    },
    [breakpoints.up('lg')]: {
      width: '40%',
    },
  },
  buttomDiv: {
    marginTop: 60,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
