import React, { FC, useState, useEffect } from 'react'
import { Modal } from '../../../../components/modal/Modal'
import { StyledTextArea } from '../../../../components/forms/TextInput'
import { Align } from '../../../../components/Align'
import { ReportPostStyles } from './style'
import { Button, UnderlinedButton } from '../../../../components/Button'

interface Props {
  open: boolean
  onClose: () => void
}

export const ReportPostModal: FC<Props> = ({ onClose, open }) => {
  const [reason, setReason] = useState('')

  useEffect(() => void setReason(''), [open])

  return (
    <Modal open={open} onClose={onClose}>
      <ReportPostStyles>
        <span className='title'>Raport Et</span>
        <Align vertical>
          <span className='label'>Gerekçe</span>
          <StyledTextArea
            value={reason}
            onChange={(e: any) => setReason(e.target.value)}
            width='92%'
            height='7em'
          />
        </Align>
        <Align justify='flex-end' padding={1}>
          <Button text='Iptal' color='grey' onClick={onClose} marginRight />
          <Button text='Gönder' color='green' onClick={() => null} />
        </Align>
      </ReportPostStyles>
    </Modal>
  )
}
