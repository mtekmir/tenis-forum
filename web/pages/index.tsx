import * as React from 'react';
import Layout from '../components/Layout/index';
import { Grid } from '@material-ui/core';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Ana Sayfa | Tenis Forum">
      <Grid spacing={24} container>
        <Grid item xs={12} />
      </Grid>
    </Layout>
  );
};

export default IndexPage;
