import * as React from 'react';
import { EditorState } from 'draft-js';
import { EditorComponent } from '../editor';
import { Button, WithStyles, withStyles } from '@material-ui/core';
import newPostStyle from './newPostStyle';
import { stateToHTML } from 'draft-js-export-html';

// Used in thread detail page

interface State {
  editorState: EditorState;
}

interface Props extends WithStyles<typeof newPostStyle> {
  onSubmit: (text: string) => void;
}

class NewPostViewC extends React.PureComponent<Props, State> {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState: EditorState) => {
    this.setState({
      editorState,
    });
  }

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { editorState } = this.state;

    onSubmit(stateToHTML(editorState.getCurrentContent()));
    this.setState(() => ({ editorState: EditorState.createEmpty() }));
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
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={() => this.handleSubmit()}
          >
            Cevap Gönder
          </Button>
        </div>
      </div>
    );
  }
}

export const NewPostView = withStyles(newPostStyle)(NewPostViewC);
