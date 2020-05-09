import React from 'react'
import { OuterDiv, ErrorMessage, LoginForm } from './styles'
import { StyledInput } from '../../../components/forms/TextInput'
import { Button } from '../../../components/Button'
import { useMutation } from 'react-apollo'
import { AdminLogin as IAdminLogin, AdminLoginVariables } from '../../../graphql/generated/AdminLogin'
import Router from 'next/router'
import { ADMIN_PATH } from '../../../constants'
import { ADMIN_LOGIN } from '../../../graphql/mutation/admin/login'

interface Props {
  error?: string
}

const AdminLogin: React.FunctionComponent<Props> = () => {
  const [error, setError] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [adminLogin] = useMutation<IAdminLogin, AdminLoginVariables>(ADMIN_LOGIN)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email && password) {
      const res = await adminLogin({ variables: { email, password } })
      if (res.data && res.data.adminLogin.error) {
        setError(res.data.adminLogin.error[0].message)
      } else {
        Router.push(`/${ADMIN_PATH}/dashboard`)
      }
    }
  }

  return (
    <OuterDiv>
      <LoginForm onSubmit={onSubmit}>
        <StyledInput
          value={email}
          placeholder='Email'
          type='email'
          onChange={({ target: { value } }: any) => setEmail(value)}
        />
        <StyledInput
          value={password}
          placeholder='Password'
          type='password'
          onChange={({ target: { value } }: any) => setPassword(value)}
        />
        <ErrorMessage error={error}>{error}</ErrorMessage>
        <Button text='Login' color='primary' type='submit' wide />
      </LoginForm>
    </OuterDiv>
  )
}

export default AdminLogin