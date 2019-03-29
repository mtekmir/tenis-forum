import * as React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import createThreadStyles from './createThreadStyles';
import { WithStyles, withStyles, Typography, Button } from '@material-ui/core';
import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Layout from '../../../components/Layout';
import { Formik, Form, Field } from 'formik';
import { TextInput } from '../../../components/forms/TextInput';

// tslint:disable-next-line
const editorTranslations = require('./editorTranslations');

export interface NewThreadValues {
  title: string;
  text: string;
}

interface State {
  editorState: EditorState;
  editor: boolean;
}
interface Props extends WithStyles<typeof createThreadStyles> {
  onSubmit: (vals: NewThreadValues) => void;
}

class CreateThreadViewC extends React.PureComponent<Props, State> {
  state = {
    editorState: EditorState.createEmpty(),
    editor: false,
  };

  onEditorStateChange = (editorState: EditorState) => {
    this.setState({
      editorState,
    });
  }

  handleSubmit = ({ title }: any) => {
    const { onSubmit } = this.props;
    const { editorState } = this.state;

    onSubmit({ text: stateToHTML(editorState.getCurrentContent()), title });
  }

  componentDidMount() {
    if (!this.state.editor) {
      this.setState({ editor: true });
    }
  }

  render() {
    const { classes } = this.props;
    const { editorState, editor } = this.state;
    return (
      <Layout title="Yeni Başlık | Tenis Forum">
        <div className={classes.root}>
          <div className={classes.titleDiv}>
            <Typography variant="h6" gutterBottom>
              Yeni Başlık
            </Typography>
          </div>
          <Formik onSubmit={this.handleSubmit} initialValues={{ title: '' }}>
            {() => (
              <Form>
                <Field name="title" type="text" component={TextInput} />
                {editor && (
                  <Editor
                    localization={{ translations: editorTranslations }}
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                    wrapperStyle={{
                      border: '1px solid #c4c5c6',
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
                <div className={classes.bottomDiv}>
                  <Button className={classes.btn} variant="contained">
                    İptal
                  </Button>
                  <Button
                    className={classes.btn}
                    type="submit"
                    color="secondary"
                    variant="contained"
                  >
                    Kaydet
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    );
  }
}

export const CreateThreadView = withStyles(createThreadStyles)(
  CreateThreadViewC,
);
