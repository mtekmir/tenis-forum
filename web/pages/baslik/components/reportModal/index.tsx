import React, { FC, useState, useEffect } from 'react'
import { Modal } from '../../../../components/modal/Modal'
import { StyledTextArea } from '../../../../components/forms/TextInput'
import { Align } from '../../../../components/Align'
import { ReportPostStyles } from './style'
import { Button, UnderlinedButton } from '../../../../components/Button'
import { useMutation } from 'react-apollo'
import { CREATE_REPORT } from '../../../../graphql/mutation/createReport'
import {
  CreateReport,
  CreateReportVariables,
} from '../../../../graphql/generated/CreateReport'

interface Props {
  open: boolean
  onClose: () => void
  postId: number
  threadId: number
}

export const ReportModal: FC<Props> = ({ onClose, open, postId, threadId }) => {
  const [reason, setReason] = useState('')
  const [reportPost] = useMutation<CreateReport, CreateReportVariables>(CREATE_REPORT, {
    onCompleted: data => data && data.reportCreate.success && onClose(),
  })

  const onSubmit = () => {
    reportPost({ variables: { reason, postId, threadId } })
  }

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
          <Button text='Gönder' color='green' onClick={onSubmit} />
        </Align>
      </ReportPostStyles>
    </Modal>
  )
}
