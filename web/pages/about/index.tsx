import * as React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout/index';
import { LoginComponent } from '../../generated/apolloComponents';

const AboutPage: React.FunctionComponent = () => (
  <Layout title='About | Next.js + TypeScript Example'>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href='/'>
        <a>Go home</a>
      </Link>
    </p>
    <LoginComponent>
      {mutate => (
        <button
          onClick={async () => {
            const res = await mutate({
              variables: {
                email: 'm3@m.com',
                password: '123mert123'
              }
            });
            console.log(res);
          }}
        >
          Login
        </button>
      )}
    </LoginComponent>
  </Layout>
);

export default AboutPage;
