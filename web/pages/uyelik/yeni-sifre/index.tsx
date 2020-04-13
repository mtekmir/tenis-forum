import * as React from 'react'
import { Formik, Form, Field } from 'formik'
import Layout from '../../../components/Layout/index'
import { TextInput } from '../../../components/forms/TextInput'
import Router, { useRouter } from 'next/router'
import { AppContext } from '../../../context/AppContext'
import { Button } from '../../../components/Button'
import { useMutation } from 'react-apollo'
import { RESET_PASSWORD } from '../../../graphql/mutation/resetPassword'

const PasswordReset = () => {
  const {
    query: { token }
  } = useRouter()
  const [resetPassword] = useMutation(RESET_PASSWORD)

  return (
    <Layout title='Şifre Değiştir | Tenis Forum'>
      <Formik
        onSubmit={async ({ newPassword }) => {
          await resetPassword({
            variables: { newPassword, pwResetToken: token }
          })
          Router.push('/')
        }}
        initialValues={{ newPassword: '' }}>
        {() => (
          <Form>
            <Field name='newPassword' placeholder='Şifre' component={TextInput} />
            <Button text='Şifre Değiştir' type='submit' color='green-gradient' />
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

export default PasswordReset
