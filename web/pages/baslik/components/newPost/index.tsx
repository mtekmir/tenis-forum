import React, { useState } from 'react'
import { EditorState } from 'draft-js'
import { EditorComponent } from '../../../../components/editor'
import { ButtonsDiv, EditorDiv } from './newPostStyle'
import { stateToHTML } from 'draft-js-export-html'
import { Button } from '../../../../components/Button'
import { useMutation } from 'react-apollo'
import { createPost, createPostVariables } from '../../../../generated/createPost'
import { CREATE_POST } from '../../../../graphql/mutation/createPost'
import { GET_THREAD_POSTS } from '../../../../graphql/query/getThreadPosts'
import { GetThreadPosts, GetThreadPostsVariables } from '../../../../generated/GetThreadPosts'

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
        const { threadGetPosts } = cache.readQuery<GetThreadPosts, GetThreadPostsVariables>({
          query: GET_THREAD_POSTS,
          variables: { threadId: threadId.toString() },
        })
        cache.writeQuery<GetThreadPosts>({
          query: GET_THREAD_POSTS,
          variables: { id: threadId.toString() },
          data: {
            threadGetPosts: {
              ...threadGetPosts,
              count: threadGetPosts.count + 1,
              posts: [...threadGetPosts.posts, { ...postCreate }],
            },
          },
        })
      },
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
