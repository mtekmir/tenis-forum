import * as React from 'react';
import Layout from '../../../components/Layout/index';

interface Props {}
const CheckEmail: React.FunctionComponent<Props> = () => {
  return (
    <Layout title="E-Posta doğrulama">
      Uyeliğinizi tamamlamak için epostanızı doğrulayın.
    </Layout>
  );
};

export default CheckEmail;
