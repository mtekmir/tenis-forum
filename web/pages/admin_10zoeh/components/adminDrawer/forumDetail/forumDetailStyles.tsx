import styled from 'styled-components';

export const ForumTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  margin-bottom: 1em;
  span {
    font-size: 0.8em;
    font-weight: 400;
  }
`;

export const ForumDetails = styled.div`
  font-size: 0.8em;
  margin-bottom: 0.4em;
  span {
    font-weight: 700;
  }

  :last-of-type {
    margin-bottom: 1em;
  }
`;
