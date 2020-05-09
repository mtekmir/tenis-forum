import React, { FC, Fragment, useState } from 'react'
import { useMutation } from 'react-apollo'

import { StyledThreadTitle } from './style'
import { StyledInput } from '../../../../components/forms/TextInput'
import { Paper } from '../../../../components/Paper'
import { UserDiv, UserDivDate } from '../../threadStyle'
import { TiUser, TiCalendarOutline } from 'react-icons/ti'
import { formatDate } from '../../../../utils/formatDate'
import { UnderlinedButton, Button } from '../../../../components/Button'
import { Align } from '../../../../components/Align'
import { Me_me } from '../../../../graphql/generated/Me'
import {
  GetThread_threadGet_thread_owner,
  GetThread,
  GetThreadVariables,
} from '../../../../graphql/generated/GetThread'
import { useBadInputError } from '../../../../hooks/useBadInputError'
import { EDIT_THREAD } from '../../../../graphql/mutation/editThread'
import { EditThreadVariables, EditThread } from '../../../../graphql/generated/EditThread'
import { GET_THREAD } from '../../../../graphql/query/getThread'
import { Alert } from '../../../../components/Alert'
import { isAdmin } from '../../../../utils/isAdmin'

interface Props {
  threadId: number
  title: string
  createdAt: Date
  owner: GetThread_threadGet_thread_owner
  user: Me_me | null
  openReportModal: () => void
  deleteThread: (id: number) => void
}

export const ThreadTitle: FC<Props> = ({
  title,
  threadId,
  createdAt,
  owner,
  user,
  openReportModal,
  deleteThread,
}) => {
  const [editing, setEditing] = useState(false)
  const [_title, setTitle] = useState(title)
  const [error, onError] = useBadInputError()
  const [editThread] = useMutation<EditThread, EditThreadVariables>(EDIT_THREAD, {
    onError,
    update(cache, { data: { threadEdit } }) {
      const { threadGet } = cache.readQuery<GetThread>({
        query: GET_THREAD,
        variables: { id: threadId.toString() },
      })
      cache.writeQuery<GetThread, GetThreadVariables>({
        query: GET_THREAD,
        variables: { id: threadId.toString() },
        data: {
          threadGet: { ...threadGet, thread: threadEdit },
        },
      })
    },
    onCompleted: _ => setEditing(false),
  })

  const onSubmit = async () => {
    await editThread({ variables: { id: threadId, title: _title } })
  }

  const onCancel = () => {
    setEditing(false)
    setTitle(title)
  }

  return (
    <Fragment>
      <Paper>
        {error && (
          <Alert type='danger' width='40em'>
            {error}
          </Alert>
        )}
        {editing ? (
          <Align align='center'>
            <StyledInput
              value={_title}
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(target.value)
              }
              width='40em'
            />
            <Button text='Iptal' onClick={onCancel} color='red' marginRight marginLeft small />
            <Button text='Onayla' onClick={onSubmit} color='green' small />
          </Align>
        ) : (
          <StyledThreadTitle>{title}</StyledThreadTitle>
        )}
        <UserDiv>
          <TiUser />
          <div>{owner.username}</div>
          &#183;
          <UserDivDate>
            <TiCalendarOutline />
            <div>{formatDate(createdAt)}</div>
          </UserDivDate>
        </UserDiv>
        <Align align='center' padding='.5em 0 0 0.9'>
          {user && <UnderlinedButton onClick={openReportModal}>Rapor et</UnderlinedButton>}
          {!editing && user && user.id === owner.id ? (
            <UnderlinedButton onClick={() => setEditing(true)}>Duzenle</UnderlinedButton>
          ) : null}
          {isAdmin(user) && (
            <UnderlinedButton onClick={() => deleteThread(threadId)}>Sil</UnderlinedButton>
          )}
        </Align>
      </Paper>
    </Fragment>
  )
}
