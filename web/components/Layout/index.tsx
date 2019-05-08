import * as React from 'react';
import Head from 'next/head';
import { HeaderContainer } from './Header/HeaderContainer';
import { MeComponent } from '../../generated/apolloComponents';
import { UserContextProvider } from '../../context/userContext';
import { HeaderView } from './Header/HeaderView';

interface Props {
  title?: string;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <MeComponent>
    {({ data }) => (
      <UserContextProvider value={{ user: data && data.me }}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <HeaderView me={data && data.me} />
        {children}
        <footer>
          <hr />
          <span>I'm here to stay (Footer)</span>
        </footer>
      </UserContextProvider>
    )}
  </MeComponent>
);

export default Layout;
