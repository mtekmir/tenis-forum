import { Theme } from '@material-ui/core';

export default ({ palette, spacing }: Theme) => ({
  categoryDiv: {
    background: palette.primary.main,
    padding: spacing.unit,
  },
  categoryTitle: {
    color: 'white',
  },
  forumDiv: {
    padding: spacing.unit,
  },
  forumTitle: {
    textDecoration: 'none',
  },
});
