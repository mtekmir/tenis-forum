import styled from 'styled-components';

export const UserDiv = styled.div`
  display: flex;
  background-color: #eee;
  padding: 0.7em;
  min-height: 4em;
  width: 20%;
  flex-direction: column;
  align-items: 'center';
  ${({ theme }) => theme.boxShadow};

  @media (${({ theme }) => theme.breakpoints.phone}) {
    height: 100%;
    width: 100%;
    flex-direction: row;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    height: 100%;
    width: 100%;
    flex-direction: row;
  }
`;
