import * as React from 'react';
import { BottomDiv, TitleDiv, CreateThreadDiv } from './createThreadStyles';
import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Layout from '../../../components/Layout';
import { Formik, Form, Field } from 'formik';
import { TextInput } from '../../../components/forms/TextInput';
import { EditorComponent } from '../../../components/editor';
import { Button } from '../../../components/Button';

export interface NewThreadValues {
  title: string;
  text: string;
}

interface State {
  editorState: EditorState;
}
interface Props {
  onSubmit: (vals: NewThreadValues) => void;
  forumId: string;
}

export class CreateThreadView extends React.PureComponent<Props, State> {
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
    const { forumId } = this.props;
    const { editorState } = this.state;
    return (
      <Layout title="Yeni Başlık | Tenis Forum">
        <CreateThreadDiv>
          <TitleDiv>
            <h4>Yeni Başlık</h4>
          </TitleDiv>
          <Formik onSubmit={this.handleSubmit} initialValues={{ title: '' }}>
            {() => (
              <Form>
                <Field name="title" type="text" component={TextInput} />
                <EditorComponent
                  onEditorStateChange={this.onEditorStateChange}
                  editorState={editorState}
                />
                <BottomDiv>
                  <Button
                    url={`/forum/${forumId}`}
                    marginRight
                    color="red_gradient"
                    text="İptal"
                  >
                    İptal
                  </Button>
                  <Button color="green_gradient" text="Kaydet" type="submit">
                    Kaydet
                  </Button>
                </BottomDiv>
              </Form>
            )}
          </Formik>
        </CreateThreadDiv>
      </Layout>
    );
  }
}
