import * as React from 'react';
import { FormContainer } from '../components/FormContainer';
import { FormDiv } from '../components/FormDiv';
import { validateRegister } from './registerSchema';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ErrorMessage } from '../giris/components/ErrorMessage';

interface Props {
  onSubmit: (vals: FormValues) => void;
}

export interface FormValues {
  username: string;
  email: string;
  password: string;
}

export class RegisterView extends React.PureComponent<Props> {
  state = {
    email: '',
    password: '',
    username: '',
    emailValidated: false,
    usernameValid: false,
    usernameValidated: false,
    emailValid: false,
    passwordValidated: false,
    passwordValid: false,
  };

  onInputChange = ({ target: { name, value } }: React.ChangeEvent<any>) => {
    this.setState(() => ({ [name]: value }));
    this.validate(value, name);
  }

  validate = async (value: string, name: string) => {
    const valid = await validateRegister[name].isValid(value);
    this.setState(() => ({
      [`${name}Validated`]: true,
      [`${name}Valid`]: valid,
    }));
  }

  onSubmit = (e: any) => {
    const {
      email,
      password,
      username,
      emailValid,
      usernameValid,
      usernameValidated,
      passwordValid,
      emailValidated,
      passwordValidated,
    } = this.state;

    e.preventDefault();
    console.log(emailValidated);
    if (!emailValidated || !passwordValidated || !usernameValidated) {
      this.validate(email, 'email');
      this.validate(password, 'password');
      this.validate(username, 'username');
    }
    if (emailValid && passwordValid && usernameValid) {
      this.props.onSubmit({ email, username, password });
    }
  }

  render() {
    const {
      email,
      password,
      username,
      emailValid,
      emailValidated,
      usernameValid,
      usernameValidated,
      passwordValid,
      passwordValidated,
    } = this.state;
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
              valid={usernameValid}
              validated={usernameValidated}
              value={username}
              placeholder="Kullanıcı Adı"
              name="username"
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
              placeholder="Şifre"
              name="password"
              onChange={this.onInputChange}
              type="text"
            />
            <ErrorMessage />
            <Button type="submit">Kayıt Ol</Button>
          </form>
        </FormDiv>
      </FormContainer>
    );
  }
}
