import * as React from 'react'
import Head from 'next/head'
import { HeaderView } from './Header/HeaderView'
import { MainContent } from './layoutStyles'
import { Footer } from './Footer'

interface Props {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <HeaderView />
    <div style={{ marginTop: '4.5em' }}>
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  </>
)

export default Layout
