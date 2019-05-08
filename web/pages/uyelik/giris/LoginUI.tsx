import * as React from 'react';
import { LoginVariables } from '../../../generated/apolloComponents';
import { validateLogin } from './loginSchema';
import { Input } from '../components/Input';
import { ErrorMessage } from './components/ErrorMessage';
import { FormDiv } from '../components/FormDiv';
import { FormContainer } from '../components/FormContainer';
import { Button } from '../components/Button';

interface Props {
  onSubmit: (input: LoginVariables) => void;
  error?: string;
}
export class LoginUI extends React.PureComponent<Props> {
  state = {
    email: '',
    password: '',
    emailValidated: false,
    emailValid: false,
    passwordValidated: false,
    passwordValid: false,
  };

  onInputChange = ({ target: { name, value } }: React.ChangeEvent<any>) => {
    this.setState(() => ({ [name]: value }));
    this.validate(value, name);
  }

  validate = async (value: string, name: string) => {
    const valid = await validateLogin[name].isValid(value);
    this.setState(() => ({
      [`${name}Validated`]: true,
      [`${name}Valid`]: valid,
    }));
  }

  onSubmit = (e: any) => {
    const {
      email,
      password,
      emailValid,
      passwordValid,
      emailValidated,
      passwordValidated,
    } = this.state;

    e.preventDefault();
    console.log(emailValidated);
    if (!emailValidated || !passwordValidated) {
      this.validate(email, 'email');
      this.validate(password, 'password');
    }
    if (emailValid && passwordValid) {
      this.props.onSubmit({ email, password });
    }
  }

  render() {
    const {
      email,
      password,
      emailValid,
      emailValidated,
      passwordValid,
      passwordValidated,
    } = this.state;
    const { error } = this.props;
    return (
      <FormContainer>
        <FormDiv>
          <form onSubmit={this.onSubmit}>
            <Input
              onBlur={({ target: { value, name } }: any) =>
                this.validate(value, name)
              }
              valid={emailValid}
              validated={emailValidated}
              value={email}
              placeholder="Email"
              name="email"
              onChange={this.onInputChange}
              type="text"
            />
            <Input
              onBlur={({ target: { value, name } }: any) =>
                this.validate(value, name)
              }
              valid={passwordValid}
              validated={passwordValidated}
              value={password}
              name="password"
              placeholder="Şifre"
              onChange={this.onInputChange}
              type="password"
            />
            <ErrorMessage error={error} />
            <Button type="submit" error={error}>
              Giriş Yap
            </Button>
          </form>
        </FormDiv>
      </FormContainer>
    );
  }
}
