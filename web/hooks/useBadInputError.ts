import { ApolloError } from 'apollo-boost'
import { useState } from 'react'

export const useBadInputError = (): [string, (e: ApolloError) => void] => {
  const [error, __setError] = useState('')

  const _setError = (e: string) => {
    __setError(e)
    setTimeout(() => {
      __setError('')
    }, 3000)
  }

  const setError = (e: ApolloError) => {
    if (
      e.graphQLErrors.length &&
      e.graphQLErrors[0].extensions &&
      e.graphQLErrors[0].extensions.code === '400'
    ) {
      _setError('Uygunsuz icerik')
    }
  }

  return [error, setError]
}
