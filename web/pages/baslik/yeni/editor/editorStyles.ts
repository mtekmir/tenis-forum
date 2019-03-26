import { Theme } from '@material-ui/core';

export default (theme: Theme) => ({
  richEditor_root: {
    background: '#fff',
    border: '1px solid #ddd',
    fontSize: 14,
    padding: 15,
  },
  richEditorEditor: {
    borderTop: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    marginTop: 10,
  },
  richEditorHidePlaceholder: {
    display: 'none',
  },
});
