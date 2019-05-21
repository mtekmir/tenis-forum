import * as React from 'react';
import { AdminLoginVariables } from '../../../generated/apolloComponents';
import { OuterDiv, ErrorMessage, LoginForm } from './styles';
import { StyledInput } from '../../../components/forms/TextInput';
import { Button } from '../../../components/Button';

interface Props {
  login: (v: AdminLoginVariables) => void;
  error?: string;
}

export const AdminLoginView: React.FunctionComponent<Props> = ({
  login,
  error,
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      login({ email, password });
    }
  };

  return (
    <OuterDiv>
      <LoginForm onSubmit={onSubmit}>
        <StyledInput
          value={email}
          placeholder="Email"
          onChange={({ target: { value } }: any) => setEmail(value)}
        />
        <StyledInput
          value={password}
          placeholder="Password"
          onChange={({ target: { value } }: any) => setPassword(value)}
        />
        <ErrorMessage error={error}>{error}</ErrorMessage>
        <Button text="Login" color="primary" type="submit" wide />
      </LoginForm>
    </OuterDiv>
  );
};
