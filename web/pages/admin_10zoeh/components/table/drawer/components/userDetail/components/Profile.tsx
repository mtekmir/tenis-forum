import * as React from 'react'
import styled from 'styled-components'
import { Title, Details } from '../../../styles'
import { formatDate } from '../../../../../../../../utils/formatDate'
import { TiCancel, TiEye } from 'react-icons/ti'
import { GetUser_userGet } from '../../../../../../../../generated/GetUser'

interface Props {
  data: GetUser_userGet
}

export const Profile: React.FunctionComponent<Props> = ({
  data: { username, email, createdAt, password, profileImageUrl }
}) => {
  const [passVisible, setPassVisible] = React.useState(false)

  const renderPassword = () => {
    return passVisible ? <div>{password}</div> : <div>{'#'.repeat(password.length)}</div>
  }

  return (
    <>
      <Title>
        <span>{username}</span>
      </Title>
      <img src={profileImageUrl} style={{ width: 100, height: 100 }} />
      <Details>
        <span>Register Date: </span>
        {formatDate(createdAt)}
      </Details>
      <Details>
        <span>Email: </span>
        {email}
      </Details>
      <Password>
        <span>Password</span>
        <div className='bottom'>
          {renderPassword()}
          {passVisible ? (
            <TiCancel onClick={() => setPassVisible(false)} />
          ) : (
            <TiEye onClick={() => setPassVisible(true)} />
          )}
        </div>
      </Password>
    </>
  )
}

const Password = styled.div`
  display: flex;
  flex-direction: column;

  .bottom {
    display: flex;
  }

  svg {
    width: 1em;
    height: 1em;
    cursor: pointer;
    margin-left: 1em;
  }
`
