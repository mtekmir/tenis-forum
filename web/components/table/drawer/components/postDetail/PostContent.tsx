import * as React from 'react';
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
        Created At:
        {formatDate(createdAt)}
      </Details>
      <Details>
        Author:
        {authorUsername}
      </Details>
      <Details>
        Thread:
        {threadTitle}
      </Details>
    </>
  );
};
