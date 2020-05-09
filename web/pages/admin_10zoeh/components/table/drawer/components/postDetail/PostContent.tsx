import * as React from 'react'
import styled from 'styled-components'
import { Title, Details, EditDelete } from '../../styles'
import { formatDate } from '../../../../../../../utils/formatDate'
import { Args, Type } from '../../DrawerContainer'
import { Button } from '../../../../../../../components/Button'
import { GetPost_postGet } from '../../../../../../../graphql/generated/GetPost'

interface Props {
  post: GetPost_postGet
  getDetail: (args: Args) => void
  askForDelete: (args: Args) => void
}

export const PostContent: React.FunctionComponent<Props> = ({
  post: { id, text, createdAt, authorUsername, threadTitle },
  askForDelete
}) => {
  return (
    <>
      <Title>Post #{id}</Title>
      <Details>
        <span>Created At: </span>
        {formatDate(createdAt)}
      </Details>
      <EditDelete>
        <Button text='Edit' onClick={() => null} marginRight color='primary' />
        <Button
          text='Delete'
          onClick={() => askForDelete({ id, type: Type.P })}
          color='red_gradient'
        />
      </EditDelete>
      <Details>
        <span>Author: </span>
        {authorUsername}
      </Details>
      <Details>
        <span>Thread: </span>
        {threadTitle}
      </Details>
      <Text>{text}</Text>
    </>
  )
}

const Text = styled.div`
  border: 1px solid #efefef;
  padding: 1em;
  margin-top: 1em;
`
