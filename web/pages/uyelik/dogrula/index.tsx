import React, { useEffect } from 'react'
import { CONFIRM_EMAIL } from '../../../graphql/mutation/confirmEmail'
import Router, { useRouter } from 'next/router'
import { useMutation } from 'react-apollo'

interface Props {
  token: string
  ctx: any
}

const ConfirmEmail: React.FC<Props> = () => {
  const {
    query: { token },
    replace
  } = useRouter()
  const [confirmEmail] = useMutation(CONFIRM_EMAIL)

  const confirm = async () => {
    try {
      const res = await confirmEmail({
        variables: { token }
      })

      if (res && res.data && res.data.confirmUserEmail.success) {
        Router.push('/uyelik/giris')
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    if (!token) {
      Router.push('/uyelik/giris')
    }
  }, [])

  return null
}

export default ConfirmEmail
