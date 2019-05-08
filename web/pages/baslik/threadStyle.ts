import styled from 'styled-components';

export const ThreadTitle = styled.h4`
  font-size: 1.5em;
  margin: 0;
`;

export const PostsDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 1px solid #8f91ad;
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  font-size: 0.7em;
  svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.3em;
  }
`;

export const UserDivDate = styled.div`
  display: flex;
  align-items: center;
`;
