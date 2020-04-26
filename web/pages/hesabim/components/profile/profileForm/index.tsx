import * as React from 'react'
import { Formik, Form, Field } from 'formik'
import { TextInput } from '../../../../../components/forms/TextInput'
import { Label, InputDiv, FormDiv, LeftDiv, RightDiv, BottomDiv } from './profileFormStyles'
import { DropzoneComponent } from './DropzoneComponent'
import { PROFILE_FIELDS } from './profileFields'
import { SelectInput } from '../../../../../components/forms/SelectInput'
import { Button } from '../../../../../components/Button'
import { Me_me } from '../../../../../generated/Me'

interface Props {
  user: Me_me | null | undefined
  onSubmit: (v: FormValues) => void
  dropzoneHover: boolean
  file: File | null
  preview: string | null
  onDropzoneHover: () => void
  onDrop: (files: File[]) => void
}

export interface FormValues {
  username: string
}
export const ProfileForm: React.ComponentType<Props> = ({
  onSubmit,
  user,
  // tslint:disable-next-line
  ...rest
}) => {
  if (!user) {
    return <div>Loading</div>
  }

  const {
    profile: { gender, location, occupation },
  } = user
  const initialValues = {
    username: user.username ? user.username : '',
    gender: gender ? gender : '',
    location: location ? location : '',
    occupation: occupation ? occupation : '',
  }

  const handleSubmit = (v: FormValues) => {
    console.log(v)
    const variables = {}
    Object.keys(v).forEach(k => {
      // @ts-ignore
      if (v[k].trim() !== initialValues[k]) {
        // @ts-ignore
        variables[k] = v[k]
      }
    })
    onSubmit(variables as FormValues)
  }

  const renderFields = () => {
    return PROFILE_FIELDS.map(({ label, name, type, options }) => (
      <InputDiv key={name}>
        <Label>{label}</Label>
        <Field
          name={name}
          placeholder={label}
          type={type}
          options={options}
          component={type === 'text' ? TextInput : SelectInput}
        />
      </InputDiv>
    ))
  }

  if (!user) {
    return <div>Loading</div>
  }

  return (
    <div>
      <Formik<FormValues> initialValues={initialValues} onSubmit={v => handleSubmit(v)}>
        {({ handleSubmit }) => (
          <Form>
            <div>
              <FormDiv>
                <LeftDiv>{renderFields()}</LeftDiv>
                <RightDiv>
                  <Label>Profil Resmi</Label>
                  <DropzoneComponent {...rest} user={user} />
                </RightDiv>
              </FormDiv>
            </div>
            <BottomDiv>
              <Button text='İptal' url='/' color='red' marginRight />
              <Button type='submit' text='Kaydet' color='green' onClick={handleSubmit} />
            </BottomDiv>
          </Form>
        )}
      </Formik>
    </div>
  )
}
