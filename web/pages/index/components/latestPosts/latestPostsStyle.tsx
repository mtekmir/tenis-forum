import styled from 'styled-components';

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
  }

  .title {
    color: ${({ theme }) => theme.palette.primary};
    font-size: 1em;
  }

  .details {
    color: #8c8c8c;
    font-size: 0.8em;
  }
`;
