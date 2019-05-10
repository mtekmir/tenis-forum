import * as React from 'react';
import { MeMe } from '../../../../../generated/apolloComponents';
import { Button } from './Button';
import { ButtonsDiv, AccountDiv } from './styles';
import { LoggedInView } from './loggedIn/LoggedInView';

interface Props {
  me: MeMe | null;
}

export const Account: React.FunctionComponent<Props> = ({ me }) => {
  const renderContent = () => {
    return me ? (
      <LoggedInView />
    ) : (
      <ButtonsDiv>
        <Button url="/uyelik/giris" text="Giriş" />
        <Button url="/uyelik/kayit-ol" text="Kayıt Ol" />
      </ButtonsDiv>
    );
  };

  return <AccountDiv>{renderContent()}</AccountDiv>;
};
