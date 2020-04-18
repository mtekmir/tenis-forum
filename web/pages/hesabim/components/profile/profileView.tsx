import React, { useState, useEffect, useContext, useReducer } from 'react'
import { ProfileForm, FormValues } from './profileForm'
import { Root, InnerDiv } from './profileStyle'
import { UserContext } from '../../../../context/userContext'

interface Props {
  onSubmit: (v: any, profileImage: File | null) => void
}

interface State {
  file: File | null
  preview: string | null
}

export const ProfileView: React.FC<Props> = props => {
  const [{ file, preview }, setState] = useReducer(
    (state: State, newState: State) => ({ ...state, ...newState }),
    { file: null, preview: null }
  )
  const [dropzoneHover, setDropzoneHover] = useState(false)
  const { user } = useContext(UserContext)

  const onDrop = (files: File[]) => {
    // tslint:disable-next-line
    setState({ file: files[0], preview: URL.createObjectURL(files[0]) })
  }

  const onDropzoneHover = () => {
    setDropzoneHover(!dropzoneHover)
  }

  const onSubmit = (formValues: FormValues) => {
    const variables: { [key: string]: any } = formValues
    props.onSubmit(variables, file)
  }

  useEffect(() => {
    return () => {
      // tslint:disable-next-line
      file && URL.revokeObjectURL(preview)
    }
  }, [])

  return (
    <Root>
      <InnerDiv>
        <ProfileForm
          dropzoneHover={dropzoneHover}
          user={user}
          onDrop={onDrop}
          onSubmit={onSubmit}
          file={file}
          preview={preview}
          onDropzoneHover={onDropzoneHover}
        />
      </InnerDiv>
    </Root>
  )
}
