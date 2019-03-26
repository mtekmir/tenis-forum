import * as React from 'react';
import { EditorComponent } from './editor';
import createThreadStyles from './createThreadStyles';
import { WithStyles, withStyles } from '@material-ui/core';

interface Props extends WithStyles<typeof createThreadStyles> {}

class CreateThreadViewC extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <EditorComponent />
        </div>
      </div>
    );
  }
}

export const CreateThreadView = withStyles(createThreadStyles)(
  CreateThreadViewC,
);
