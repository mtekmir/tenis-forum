import * as React from 'react'
import Dropzone from 'react-dropzone'
import { DropzoneHoverContentDiv, DropzoneDiv, DropzoneHoverInnerDiv } from './dropzoneStyle'
import { TiCamera } from 'react-icons/ti'
import { Me_me } from '../../../../../../generated/Me'

interface Props {
  user: Me_me | null | undefined
  dropzoneHover: boolean
  preview: string | null
  onDropzoneHover: () => void
  onDrop: (files: File[]) => void
}

export const DropzoneComponent: React.FunctionComponent<Props> = ({
  dropzoneHover,
  onDrop,
  onDropzoneHover,
  preview,
  user,
}) => {
  return (
    <Dropzone accept='image/jpeg, image/png' multiple={false} onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => {
        return (
          <DropzoneDiv
            onMouseEnter={onDropzoneHover}
            onMouseLeave={onDropzoneHover}
            {...getRootProps()}>
            <input {...getInputProps()} />
            <DropzoneHoverContentDiv
              imageUrl={preview || user.profileImageUrl}
              dropzoneHover={dropzoneHover}>
              <DropzoneHoverInnerDiv dropzoneHover={dropzoneHover}>
                <TiCamera />
                <span>Profil Resmini Değiştir</span>
              </DropzoneHoverInnerDiv>
            </DropzoneHoverContentDiv>
          </DropzoneDiv>
        )
      }}
    </Dropzone>
  )
}
