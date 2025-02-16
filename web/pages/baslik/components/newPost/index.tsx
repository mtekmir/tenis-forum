import React, { useState } from 'react'
import dompurify from 'dompurify'
import { Editor } from '../../../../components/Editor'
import { ButtonsDiv, EditorDiv } from './newPostStyle'
import { Button } from '../../../../components/Button'
import { useMutation } from 'react-apollo'
import { createPost, createPostVariables } from '../../../../graphql/generated/createPost'
import { CREATE_POST } from '../../../../graphql/mutation/createPost'
import { GET_THREAD_POSTS } from '../../../../graphql/query/getThreadPosts'
import { GetThreadPosts, GetThreadPostsVariables } from '../../../../graphql/generated/GetThreadPosts'
import { Alert } from '../../../../components/Alert'
import { useBadInputError } from '../../../../hooks/useBadInputError'

interface Props {
  threadId: number
  page: number
  count: number
}

const sanitizer = dompurify.sanitize
export const NewPost: React.FC<Props> = ({ threadId, page, count }) => {
  const [editorState, setEditorState] = useState('')
  const [error, setError] = useBadInputError()
  const [createPost] = useMutation<createPost, createPostVariables>(CREATE_POST, {
    onError: setError,
  })

  const handleSubmit = () => {
    const text = sanitizer(editorState)
    if (!text.trim()) {
      return
    }

    createPost({
      variables: { text, threadId },
      update(cache, { data: { postCreate } }) {
        if (Math.ceil(count / 50) > page) {
          return
        }
        const { threadGetPosts } = cache.readQuery<GetThreadPosts, GetThreadPostsVariables>({
          query: GET_THREAD_POSTS,
          variables: { threadId: threadId.toString(), page },
        })
        cache.writeQuery<GetThreadPosts, GetThreadPostsVariables>({
          query: GET_THREAD_POSTS,
          variables: { threadId: threadId.toString(), page },
          data: {
            threadGetPosts: {
              ...threadGetPosts,
              count: threadGetPosts.count + 1,
              posts: [...threadGetPosts.posts, { ...postCreate }],
            },
          },
        })
        setEditorState('')
      },
    })
  }

  return (
    <EditorDiv>
      {error && <Alert type='danger'>{error}</Alert>}
      <Editor setEditorState={setEditorState} editorState={editorState} />
      <ButtonsDiv>
        <Button text='Cevap Gönder' color='green' onClick={handleSubmit} />
      </ButtonsDiv>
    </EditorDiv>
  )
}
