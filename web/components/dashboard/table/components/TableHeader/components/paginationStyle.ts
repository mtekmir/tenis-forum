import { Theme } from '@material-ui/core';

export default ({ spacing: { unit } }: Theme) => ({
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: unit * 2,
    width: '12%',
  },
  paginationSmall: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: unit * 8,
    width: '7%',
  },
  paginationIcons: {
    width: '1.2em',
    height: '1.2em',
  },
});
