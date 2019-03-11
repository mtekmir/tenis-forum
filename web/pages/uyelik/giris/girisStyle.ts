import { Theme } from '@material-ui/core';

export default ({ spacing }: Theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginTop: spacing.unit,
    marginBottom: spacing.unit,
  },
  innerContainer: {
    width: 300,
    height: 300,
    padding: spacing.unit * 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
