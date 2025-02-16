import React, { FC, useState } from 'react'
import { PostContentDiv } from '../styles/PostContent'
import { Editor } from '../../../../../components/Editor'
import { Align } from '../../../../../components/Align'
import { Button } from '../../../../../components/Button'
import { useMutation } from 'react-apollo'
import { EDIT_POST } from '../../../../../graphql/mutation/editPost'
import { EditPost, EditPostVariables } from '../../../../../graphql/generated/editPost'
import {
  GetThreadPosts,
  GetThreadPostsVariables,
} from '../../../../../graphql/generated/GetThreadPosts'
import { GET_THREAD_POSTS } from '../../../../../graphql/query/getThreadPosts'
import { useBadInputError } from '../../../../../hooks/useBadInputError'
import { Alert } from '../../../../../components/Alert'

interface Props {
  text: string
  setEditing: (e: boolean) => void
  postId: number
  sanitizer: (s: string) => string
  page: number
  threadId: number
}

export const PostEditing: FC<Props> = ({
  text,
  setEditing,
  postId,
  sanitizer,
  threadId,
  page,
}) => {
  const [error, onError] = useBadInputError()
  const [state, setState] = useState(text)
  const [editPost] = useMutation<EditPost, EditPostVariables>(EDIT_POST, {
    onError,
    onCompleted: _ => setEditing(false),
    update(cache, { data: { postEdit } }) {
      const { threadGetPosts } = cache.readQuery<GetThreadPosts>({
        query: GET_THREAD_POSTS,
        variables: { threadId: threadId.toString(), page },
      })

      cache.writeQuery<GetThreadPosts, GetThreadPostsVariables>({
        query: GET_THREAD_POSTS,
        variables: { threadId: threadId.toString(), page },
        data: {
          threadGetPosts: {
            ...threadGetPosts,
            posts: threadGetPosts.posts.map(p => (p.id === postId ? postEdit : p)),
          },
        },
      })
    },
  })

  const onSubmit = async () => {
    if (state !== text) {
      await editPost({ variables: { postId, text: sanitizer(state) } })
    }
  }

  return (
    <PostContentDiv>
      {error && <Alert type='danger'>{error}</Alert>}
      <Editor editorState={state} setEditorState={setState} />
      <Align padding={1} justify='flex-end'>
        <Button text='Iptal' color='secondary' marginRight onClick={() => setEditing(false)} />
        <Button text='Onayla' color='green' onClick={onSubmit} />
      </Align>
    </PostContentDiv>
  )
}
