import React, { useState } from 'react'
import { EditorState } from 'draft-js'
import { EditorComponent } from '../../../../components/editor'
import { ButtonsDiv, EditorDiv } from './newPostStyle'
import { stateToHTML } from 'draft-js-export-html'
import { Button } from '../../../../components/Button'
import { useMutation } from 'react-apollo'
import { createPost, createPostVariables } from '../../../../generated/createPost'
import { CREATE_POST } from '../../../../graphql/mutation/createPost'
import { GET_THREAD } from '../../../../graphql/query/getThread'
import { GetThread, GetThreadVariables } from '../../../../generated/GetThread'

// Used in thread detail page

interface Props {
  threadId: number
}

export const NewPost: React.FC<Props> = ({ threadId }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [createPost, { data }] = useMutation<createPost, createPostVariables>(CREATE_POST)

  const handleSubmit = () => {
    const text = stateToHTML(editorState.getCurrentContent())
    if (!text.trim()) {
      return
    }

    createPost({
      variables: { text, threadId },
      update(cache, { data: { postCreate } }) {
        const { threadGet } = cache.readQuery<GetThread, GetThreadVariables>({
          query: GET_THREAD,
          variables: { id: threadId.toString() }
        })
        cache.writeQuery<GetThread>({
          query: GET_THREAD,
          variables: { id: threadId.toString() },
          data: {
            threadGet: {
              ...threadGet,
              postCount: threadGet.postCount + 1,
              thread: {
                ...threadGet.thread,
                posts: [...threadGet.thread.posts, { ...postCreate }]
              }
            }
          }
        })
      }
    })
    setEditorState(EditorState.createEmpty())
  }

  return (
    <EditorDiv>
      <EditorComponent
        onEditorStateChange={s => setEditorState(s)}
        editorState={editorState}
      />
      <ButtonsDiv>
        <Button text='Cevap Gönder' color='green_gradient' onClick={handleSubmit} />
      </ButtonsDiv>
    </EditorDiv>
  )
}
