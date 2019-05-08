import * as React from 'react';
import { MeMe } from '../../../../../generated/apolloComponents';
import { Button } from './Button';
import { ButtonsDiv, AccountDiv } from './styles';

interface Props {
  me: MeMe | null;
}

export const Account: React.FunctionComponent<Props> = ({ me }) => {
  const renderContent = () => {
    return me ? (
      <div>LoggedIn</div>
    ) : (
      <ButtonsDiv>
        <Button url="/uyelik/giris" text="Giriş" />
        <Button url="/uyelik/kayit-ol" text="Kayıt Ol" />
      </ButtonsDiv>
    );
  };

  return <AccountDiv>{renderContent()}</AccountDiv>;
};
