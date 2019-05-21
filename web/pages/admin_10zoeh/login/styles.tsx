import styled from 'styled-components';

export const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  width: 50%;
  height: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 1em;
    padding: 1.2em 2.6em;
  }

  input {
    margin-bottom: 1em;
  }
`;

export const ErrorMessage = styled.div<{ error: string }>`
  visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
  height: ${({ error }) => (error ? '10em' : '0px')};
  background-image: linear-gradient(to right, #f8333c, #f9585f);
  box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  transition: 0.3s height;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
`;
