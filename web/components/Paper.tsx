import styled from 'styled-components';

export const Paper = styled.div<{ background?: string }>`
  background: ${({ background }) => background || 'white'};
  ${({ theme }) => theme.boxShadow};
  /* margin-top: 1em; */
  padding: 1em;
`;
