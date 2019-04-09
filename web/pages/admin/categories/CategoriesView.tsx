import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import categoriesStyle from './categoriesStyle';
import { GetAllCategoriesCategories } from '../../../generated/apolloComponents';
import { Table } from '../../../components/dashboard/table';
import {
  CATEGORY_TABLE_MENU,
  CATEGORY_TABLE_HEADERS,
} from './categoryTableMenuItems';
import Layout from '../../../components/Layout';

interface Props extends WithStyles<typeof categoriesStyle> {
  categories: GetAllCategoriesCategories[];
  isFetching: boolean;
}

const CategoriesViewC: React.ComponentType<Props> = ({
  categories,
  isFetching,
}) => {
  return (
    <Layout title="Categories | Admin Dashboard">
      <Table
        filterFor="products"
        filterProps={{}}
        getRows={() => null}
        count={categories.length}
        menuItems={CATEGORY_TABLE_MENU}
        isFetching={isFetching}
        categories={categories}
        tableHeaders={CATEGORY_TABLE_HEADERS}
      />
    </Layout>
  );
};

export const CategoriesView = withStyles(categoriesStyle)(CategoriesViewC);
