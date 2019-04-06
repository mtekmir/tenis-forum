import { Theme } from '@material-ui/core';
import { TextTransformProperty } from 'csstype';

export default ({ spacing: { unit } }: Theme) => ({
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
  goToPageInput: {
    width: '30%',
    border: '1px solid #e2e2e2',
  },
  goToPageInput_input: {
    height: '50%',
    paddingLeft: unit * 2,
  },
  goToPageContainer: {
    padding: unit,
    width: 300,
  },
  goToPageBottomDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: unit / 2,
  },
  goToPageBtnText: {
    textTransform: 'none' as TextTransformProperty,
  },
});
