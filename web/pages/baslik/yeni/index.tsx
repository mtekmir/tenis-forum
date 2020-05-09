import React, { useState } from 'react'
import { BottomDiv, TitleDiv, CreateThreadDiv } from './createThreadStyles'
import Layout from '../../../components/Layout'
import { Formik, Form, Field } from 'formik'
import { TextInput } from '../../../components/forms/TextInput'
import { Button } from '../../../components/Button'
import { useRouter } from 'next/router'
import { useMutation } from 'react-apollo'
import { createThread, createThreadVariables } from '../../../graphql/generated/createThread'
import { CREATE_THREAD } from '../../../graphql/mutation/createThread'
import { Editor } from '../../../components/Editor'
import Router from 'next/router'
import dompurify from 'dompurify'
import { useBadInputError } from '../../../hooks/useBadInputError'
import { Alert } from '../../../components/Alert'

export interface NewThreadValues {
  title: string
  text: string
}

const sanitizer = dompurify.sanitize
const CreateThread: React.FC = () => {
  const {
    query: { forumId },
  } = useRouter()
  const [error, onError] = useBadInputError()
  const [createThread] = useMutation<createThread, createThreadVariables>(CREATE_THREAD, {
    onError,
    onCompleted: data => Router.push(`/baslik/${data.threadCreate.id}`),
  })
  const [editorState, setEditorState] = useState('')

  const onSubmit = async (title: string) => {
    await createThread({
      variables: {
        text: sanitizer(editorState),
        title,
        forumId: parseInt(forumId as string),
      },
    })
  }

  return (
    <Layout title='Yeni Başlık | Tenis Forum'>
      <CreateThreadDiv>
        {error && <Alert type='danger'>{error}</Alert>}
        <TitleDiv>
          <h4>Yeni Başlık</h4>
        </TitleDiv>
        <Formik onSubmit={async ({ title }) => onSubmit(title)} initialValues={{ title: '' }}>
          {({ handleSubmit }) => (
            <Form>
              <Field name='title' type='text' component={TextInput} width='50%' />
              <br />
              <Editor setEditorState={setEditorState} editorState={editorState} />
              <BottomDiv>
                <Button url={`/forum/${forumId}`} marginRight color='red' text='İptal'>
                  İptal
                </Button>
                <Button color='green' text='Kaydet' onClick={handleSubmit}>
                  Kaydet
                </Button>
              </BottomDiv>
            </Form>
          )}
        </Formik>
      </CreateThreadDiv>
    </Layout>
  )
}

export default CreateThread
