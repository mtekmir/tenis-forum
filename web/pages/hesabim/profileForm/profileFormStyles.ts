import styled from 'styled-components';

export const Label = styled.div`
  font-weight: 700;
  margin: 1em 0 0.5em 0.5em;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormDiv = styled.div`
  padding: 1em;
  max-width: 100%;
  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
    display: flex;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-left: 1em;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2em;
`;
