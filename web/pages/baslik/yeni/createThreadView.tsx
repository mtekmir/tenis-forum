import * as React from 'react';
import createThreadStyles from './createThreadStyles';
import { WithStyles, withStyles, Typography, Button } from '@material-ui/core';
import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Layout from '../../../components/Layout';
import { Formik, Form, Field } from 'formik';
import { TextInput } from '../../../components/forms/TextInput';
import { EditorComponent } from '../../../components/editor';

export interface NewThreadValues {
  title: string;
  text: string;
}

interface State {
  editorState: EditorState;
}
interface Props extends WithStyles<typeof createThreadStyles> {
  onSubmit: (vals: NewThreadValues) => void;
}

class CreateThreadViewC extends React.PureComponent<Props, State> {
  state = {
    editorState: EditorState.createEmpty(),
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

  render() {
    const { classes } = this.props;
    const { editorState } = this.state;
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
                <EditorComponent
                  onEditorStateChange={this.onEditorStateChange}
                  editorState={editorState}
                />
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
