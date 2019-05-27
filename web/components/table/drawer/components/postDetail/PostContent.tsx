import * as React from 'react';
import styled from 'styled-components';
import { GetPostPostGet } from '../../../../../generated/apolloComponents';
import { Title, Details } from '../../styles';
import { formatDate } from '../../../../../utils/formatDate';
import { Args } from '../../DrawerContainer';

interface Props {
  post: GetPostPostGet;
  getDetail: (args: Args) => void;
}

export const PostContent: React.FunctionComponent<Props> = ({
  post: { id, text, createdAt, authorId, authorUsername, threadId, threadTitle },
}) => {
  return (
    <>
      <Title>Post #{id}</Title>
      <Details>
        <span>Created At: </span>
        {formatDate(createdAt)}
      </Details>
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
  );
};

const Text = styled.div`
  border: 1px solid #efefef;
  padding: 1em;
  margin-top: 1em;
`;
