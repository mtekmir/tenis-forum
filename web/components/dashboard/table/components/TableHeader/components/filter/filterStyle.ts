import { Theme } from '@material-ui/core';
import { FlexWrapProperty } from 'csstype';

export default ({ spacing: { unit } }: Theme) => ({
  filterIcon: {
    width: '1.2em',
    height: '1.2em',
  },
  filterPaper: {
    minWidth: 325,
  },
  appliedFilters: {
    minHeight: 50,
    display: 'flex',
    flexWrap: 'wrap' as FlexWrapProperty,
    padding: unit * 1,
    borderBottom: '1px solid #eee',
  },
  filterChip: {
    margin: unit * 1,
  },
});
