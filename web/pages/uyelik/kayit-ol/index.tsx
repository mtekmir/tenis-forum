import React, { useState } from 'react'
import Layout from '../../../components/Layout/index'
import Router from 'next/router'
import { FormValues, RegisterView } from './RegisterView'
import { useMutation } from 'react-apollo'
import { REGISTER } from '../../../graphql/mutation/register'
import { Register as IRegister, RegisterVariables } from '../../../generated/Register'

const Register: React.FC = () => {
  const [error, setError] = useState('')
  const [register, { data, error: registerError }] = useMutation<IRegister, RegisterVariables>(
    REGISTER
  )

  const setErrorMsg = (msg: string) => {
    setError(msg)
    setTimeout(() => {
      setError('')
    }, 3000)
  }

  const onSubmit = async (variables: FormValues) => {
    try {
      const res = await register({ variables })
      if (res && res.data && res.data.register.error) {
        setErrorMsg(res.data.register.error[0].message)
      } else {
        Router.push('/uyelik/eposta-dogrulama')
      }
    } catch (err) {
      console.log(err)
      setErrorMsg('Üzgünüz, bir hata oluştu.')
      console.log(err.graphQLErrors)
    }
  }

  return (
    <Layout title='Üye Ol | Tenis Forum'>
      <RegisterView onSubmit={onSubmit} error={error} />
    </Layout>
  )
}

export default Register
