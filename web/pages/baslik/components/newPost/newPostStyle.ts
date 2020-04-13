import styled from 'styled-components';
export const EditorDiv = styled.div`
  width: 95%;
  margin: 0 auto;

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 95%;
    padding: 0.5em;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;
`;
