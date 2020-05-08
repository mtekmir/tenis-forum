import * as React from 'react'
import { ModalDimmer, ModalContent, CloseDiv } from './styles'
import { Portal } from './Portal'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  open: boolean
  onClose: () => void
}

export const Modal: React.FunctionComponent<Props> = ({ children, open, onClose }) => {
  return open ? (
    <Portal>
      <ModalDimmer>
        <ModalContent>
          <CloseDiv>
            <AiOutlineClose onClick={onClose} />
          </CloseDiv>
          {children}
        </ModalContent>
      </ModalDimmer>
    </Portal>
  ) : null
}
