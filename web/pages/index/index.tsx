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

          if (data && data.categoryGetAll && data.categoryGetAll.success) {
            return <IndexView categories={data.categoryGetAll.categories} />;
          }
        }}
      </GetCategoriesComponent>
    </Layout>
  );
};

export default IndexPage;
