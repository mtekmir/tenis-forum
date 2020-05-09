import React, { FC, useContext, Fragment, useState, useEffect } from 'react'
import * as Yup from 'yup'

import { Modal } from '../../../modal/Modal'
import { ContactUsFormStyles } from './style'
import { UserContext } from '../../../../context/userContext'
import { TextInput } from '../../../forms/TextInput'
import { Formik, Form, Field } from 'formik'
import { useMutation } from 'react-apollo'
import { SEND_FEEDBACK } from '../../../../graphql/mutation/sendFeedback'
import { SendFeedback, SendFeedbackVariables } from '../../../../graphql/generated/SendFeedback'
import { Button } from '../../../Button'
import { Align } from '../../../Align'
import { Alert } from '../../../Alert'
import { contactFormSchema, CONTACT_US_FIELDS } from './fields'

interface Props {
  open: boolean
  onClose: () => void
}

export const ContactUs: FC<Props> = ({ open, onClose }) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [sendFeedback] = useMutation<SendFeedback, SendFeedbackVariables>(SEND_FEEDBACK)
  const { user } = useContext(UserContext)

  const onSubmit = async (variables: any) => {
    const res = await sendFeedback({ variables })
    if (res.data && res.data.userSendFeedback.success) {
      setSuccess(true)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    setError(false)
    setSuccess(false)
  }, [open])

  return (
    <Modal open={open} onClose={onClose}>
      <ContactUsFormStyles>
        {error && <Alert type='warning'>Uzgunuz bir hata olustu</Alert>}
        {success ? (
          <Alert type='success'>Geri Donusunuz icin tesekkurler</Alert>
        ) : (
          <Fragment>
            <h3>İletişim</h3>
            <Formik
              initialValues={{
                name: user ? user.username : '',
                email: user ? user.email : '',
                subject: '',
                message: '',
              }}
              validationSchema={contactFormSchema}
              onSubmit={onSubmit}>
              <Form>
                {CONTACT_US_FIELDS.map(({ label, name, type }) => (
                  <Field
                    key={name}
                    component={TextInput}
                    name={name}
                    label={label}
                    type={type || 'text'}
                  />
                ))}
                <Align justify='flex-end' padding={1}>
                  <Button color='grey' text='Iptal' onClick={onClose} marginRight />
                  <Button color='green' text='Gonder' type='submit' />
                </Align>
              </Form>
            </Formik>
          </Fragment>
        )}
      </ContactUsFormStyles>
    </Modal>
  )
}
