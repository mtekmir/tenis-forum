import * as React from 'react';
import { format } from 'date-fns';
import { PostDiv } from './components/PostDiv';
import { ProfileImage } from './components/ProfileImage';
import { UserDiv } from './components/UserDiv';
import {
  PostContent,
  PostContentTopDiv,
  Divider,
} from './components/PostContent';

interface Props {
  index: number;
  username: string;
  text: string;
  createdAt: Date;
  profileImageUrl: string;
  id: number;
}

export const Post: React.FunctionComponent<Props> = ({
  username,
  text,
  createdAt,
  profileImageUrl,
  index,
  id,
}) => {
  return (
    <PostDiv id={id.toString()}>
      <UserDiv>
        <ProfileImage src={profileImageUrl} />
        <div>{username}</div>
      </UserDiv>
      <PostContent>
        <PostContentTopDiv>
          <span>{format(createdAt, 'MMM DD, YYYY')}</span>
          <span># {index}</span>
        </PostContentTopDiv>
        <Divider />
        <span>{text}</span>
      </PostContent>
    </PostDiv>
  );
};
