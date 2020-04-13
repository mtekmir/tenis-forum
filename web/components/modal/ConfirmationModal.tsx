import * as React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import styled from 'styled-components'
import { Button } from '../Button'
import { Modal } from './Modal'

interface Props {
  text: string
  open: boolean
  title?: string
  onConfirm: () => void
  onCancel: () => void
}

export const ConfirmationModal: React.FunctionComponent<Props> = ({
  open,
  onCancel,
  onConfirm,
  text
}) => {
  return (
    <Modal onClose={onCancel} open={open}>
      <OutsideClickHandler onOutsideClick={onCancel}>
        <Confirmation>
          {text}
          <div className='buttons'>
            <Button text='Cancel' onClick={onCancel} color='primary' marginRight />
            <Button text='Confirm' onClick={onConfirm} color='red_gradient' />
          </div>
        </Confirmation>
      </OutsideClickHandler>
    </Modal>
  )
}

const Confirmation = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  .buttons {
    margin-top: 1em;
  }
`
