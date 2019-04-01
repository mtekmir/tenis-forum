import * as React from 'react';
import { EditorState } from 'draft-js';
import { EditorComponent } from '../editor';
import { Button, WithStyles, withStyles } from '@material-ui/core';
import newPostStyle from './newPostStyle';

interface State {
  editorState: EditorState;
}

interface Props extends WithStyles<typeof newPostStyle> {}

class NewPostC extends React.PureComponent<Props, State> {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState: EditorState) => {
    this.setState({
      editorState,
    });
  }

  render() {
    const { editorState } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.editorDiv}>
        <div>
          <EditorComponent
            onEditorStateChange={this.onEditorStateChange}
            editorState={editorState}
          />
        </div>
        <div className={classes.buttonDiv}>
          <Button type="submit" color="secondary" variant="contained">
            Cevap Gönder
          </Button>
        </div>
      </div>
    );
  }
}

export const NewPost = withStyles(newPostStyle)(NewPostC);
