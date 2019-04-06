import { Theme } from '@material-ui/core';

export default ({ spacing: { unit } }: Theme) => ({
  paginationContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  paginationIcons: {},
  pageButton: {
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    cursor: 'pointer',
    border: '1px solid #e2e2e2',
  },
  pageButton_selected: {
    backgroundColor: '#ffddc1',
  },
});
