import * as React from 'react';
import Layout from '../../components/Layout/index';
import { LinearProgress } from '@material-ui/core';
import { GetCategoriesComponent } from '../../generated/apolloComponents';
import { IndexView } from './IndexView';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Ana Sayfa | Tenis Forum">
      <GetCategoriesComponent>
        {({ data, loading }) => {
          if (loading) {
            return <LinearProgress />;
          }

          if (data && data.categoryGet && data.categoryGet.success) {
            return <IndexView categories={data.categoryGet.categories} />;
          }
        }}
      </GetCategoriesComponent>
    </Layout>
  );
};

export default IndexPage;
