import { Theme } from '@material-ui/core';

export default ({ spacing: { unit } }: Theme) => ({
  menuDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: unit * 1,
    paddingRight: unit * 2,
    marginBottom: -unit * 1,
  },
});
