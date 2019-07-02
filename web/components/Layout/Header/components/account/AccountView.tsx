import * as React from 'react';
import { MeMe } from '../../../../../generated/apolloComponents';
import { Button } from './Button';
import { ButtonsDiv, AccountDiv } from './styles';
import { LoggedInView } from './loggedIn/LoggedInView';
import { BigMenuItem } from '../bigMenu/bigMenuItem';

interface Props {
  me: MeMe | null;
  width: number;
}

const ITEMS = [
  {
    label: 'Giriş',
    url: '/uyelik/giris',
  },
  {
    label: 'Kayıt Ol',
    url: '/uyelik/kayit-ol',
  },
];

export const Account: React.FunctionComponent<Props> = ({ me, width }) => {
  const renderContent = () => {
    if (me) {
      return <LoggedInView me={me} />;
    } else if (width <= 599) {
      return (
        <ButtonsDiv>
          {ITEMS.map(({ label, url }) => (
            <Button key={label} url={url} text={label} />
          ))}
        </ButtonsDiv>
      );
    } else {
      return ITEMS.map(m => <BigMenuItem {...m} key={m.url} />);
    }
  };

  return <AccountDiv>{renderContent()}</AccountDiv>;
};
