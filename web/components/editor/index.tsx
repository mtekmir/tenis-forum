import * as React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import editorTranslations from './editorTranslations';
import { Editor } from 'react-draft-wysiwyg';

interface Props {
  editorState: EditorState;
  onEditorStateChange: (editorState: EditorState) => void;
}

export class EditorComponent extends React.PureComponent<Props> {
  state = {
    editor: false,
  };

  componentDidMount() {
    if (!this.state.editor) {
      this.setState({ editor: true });
    }
  }

  render() {
    const { editorState, onEditorStateChange } = this.props;
    const { editor } = this.state;
    return (
      <React.Fragment>
        {editor && (
          <Editor
            localization={{ translations: editorTranslations }}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            wrapperStyle={{
              // border: '1px solid #c4c5c6',
              padding: 10,
              marginTop: 20,
            }}
            editorStyle={{
              minHeight: 200,
              background: 'white',
              border: '1px solid #c4c5c6',
              padding: 5,
              paddingLeft: 15,
            }}
            toolbarStyle={{ border: '1px solid #c4c5c6' }}
          />
        )}
      </React.Fragment>
    );
  }
}
