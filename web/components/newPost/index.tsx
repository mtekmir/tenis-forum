import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { NewPostView } from './NewPostView'
import { CREATE_POST } from '../../graphql/mutation/createPost'

interface Props {
  threadId: number
}

export const NewPostContainer: React.FunctionComponent<Props> = ({ threadId }) => {
  const [createPost, { data }] = useMutation(CREATE_POST)
  const submit = (text: string) => {
    if (!text.trim()) {
      return
    }
    createPost({ variables: { text, threadId } })
  }

  return <NewPostView onSubmit={submit} />
}
