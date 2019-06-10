import styled from 'styled-components';

export const Tabs = styled.div`
  /* position: absolute;
  bottom: 0;
  left: 0; */
  margin-top: -1em;
  margin-bottom: 1em;
  height: 2.5em;
  display: flex;
  padding-left: 1em;
  color: white;
  background: ${({ theme }) => theme.palette.primary};
`;
