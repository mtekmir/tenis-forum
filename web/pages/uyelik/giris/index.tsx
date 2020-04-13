import * as React from 'react'
import Layout from '../../../components/Layout'
import { LOGIN } from '../../../graphql/mutation/login'
import { useMutation } from 'react-apollo'
import Router from 'next/router'
import { LoginUI } from './LoginUI'
import { ME_QUERY } from '../../../graphql/query/meQuery'

export interface LoginVariables {
  email: string
  password: string
}

const LoginContainer: React.FunctionComponent = () => {
  const [error, setError] = React.useState('')
  const [login, { data, error: loginError, loading }] = useMutation(LOGIN, {
    refetchQueries: [{ query: ME_QUERY }]
  })
  const onSubmit = async (variables: LoginVariables) => {
    try {
      const response = await login({
        variables
      })
      if (!loading && data && !loginError) {
        setError(response.data.login.error[0].message)
        setTimeout(() => {
          setError('')
        }, 3000)
      } else {
        Router.push('/')
      }
    } catch (err) {
      setError('Üzgünüz, bir hata oluştu.')
      setTimeout(() => {
        setError('')
      }, 3000)
      console.log(err.graphQLErrors)
    }
  }

  return (
    <Layout title='Üye Girişi | Tenis Forum'>
      <LoginUI error={error} onSubmit={onSubmit} />
    </Layout>
  )
}

export default LoginContainer
