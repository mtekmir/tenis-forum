import * as React from 'react';
import Head from 'next/head';
import { HeaderView } from './Header/HeaderView';
import { MainContent } from './layoutStyles';

interface Props {
  title?: string;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HeaderView />
    <div style={{ marginTop: '4.5em' }}>
      <MainContent>{children}</MainContent>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  </>
);

export default Layout;
