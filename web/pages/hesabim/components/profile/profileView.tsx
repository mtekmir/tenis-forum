import React, { useState, useEffect, useContext } from 'react'
import { ProfileForm, FormValues } from './profileForm'
import { Root, InnerDiv } from './profileStyle'
import { UserContext } from '../../../../context/userContext'

interface Props {
  onSubmit: (v: any, profileImage: File | null) => void
}

export interface IFile extends File {
  preview: string
}

export const ProfileView: React.FC<Props> = props => {
  const [file, setFile] = useState<IFile | null>(null)
  const [dropzoneHover, setDropzoneHover] = useState(false)
  const { user } = useContext(UserContext)

  const onDrop = (files: File[]) => {
    // tslint:disable-next-line
    setFile({ ...files[0], preview: URL.createObjectURL(files[0]) })
  }

  const onDropzoneHover = () => {
    setDropzoneHover(!dropzoneHover)
  }

  const onSubmit = (formValues: FormValues) => {
    const variables: { [key: string]: any } = formValues
    console.log(variables)
    props.onSubmit(variables, file)
  }

  useEffect(() => {
    return () => {
      // tslint:disable-next-line
      file && URL.revokeObjectURL(file.preview)
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
          onDropzoneHover={onDropzoneHover}
        />
      </InnerDiv>
    </Root>
  )
}
