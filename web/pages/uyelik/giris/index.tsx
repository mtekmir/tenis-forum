import * as React from 'react'
import Layout from '../../../components/Layout'
import { LOGIN } from '../../../graphql/mutation/login'
import { useMutation, useQuery, useApolloClient } from 'react-apollo'
import Router from 'next/router'
import { LoginUI } from './LoginUI'
import { ME_QUERY } from '../../../graphql/query/meQuery'
import { LoginVariables, Login } from '../../../graphql/generated/Login'

const LoginContainer: React.FunctionComponent = () => {
  const [error, setError] = React.useState('')
  const client = useApolloClient()
  const [login, { loading }] = useMutation<Login, LoginVariables>(LOGIN)
  const onSubmit = async (variables: LoginVariables) => {
    try {
      const response = await login({
        variables
      })
      if (!loading && response.data && response.data.login.error) {
        setError(response.data.login.error[0].message)
        setTimeout(() => {
          setError('')
        }, 3000)
      } else {
        await client.query({ query: ME_QUERY })
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
