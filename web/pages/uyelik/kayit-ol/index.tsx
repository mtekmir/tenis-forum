import React, { useState } from 'react'
import Layout from '../../../components/Layout/index'
import { useRouter } from 'next/router'
import { FormValues, RegisterView } from './RegisterView'
import { useMutation } from 'react-apollo'
import { REGISTER } from '../../../graphql/mutation/register'

const Register: React.FC = () => {
  const [error, setError] = useState('')
  const router = useRouter()
  const [register, { data, error: registerError }] = useMutation(REGISTER)

  const setErrorMsg = (msg: string) => {
    setError(msg)
    setTimeout(() => {
      setError('')
    }, 3000)
  }

  const onSubmit = async (variables: FormValues) => {
    try {
      const res = await register({ variables })
      if (res && data && !registerError) {
        setErrorMsg(res.data.register.error[0].message)
      } else {
        router.push('/uyelik/eposta-dogrulama')
      }
    } catch (err) {
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
