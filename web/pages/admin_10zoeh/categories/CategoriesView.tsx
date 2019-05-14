import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import categoriesStyle from './categoriesStyle';
import { GetAllCategoriesCategories } from '../../../generated/apolloComponents';
import { CATEGORY_TABLE_HEADERS } from './categoryTableMenuItems';
import Layout from '../../../components/Layout';
import { TableComponent } from '../../../components/table/Table';

interface Props extends WithStyles<typeof categoriesStyle> {
  categories: GetAllCategoriesCategories[];
}

const CategoriesViewC: React.ComponentType<Props> = ({ categories }) => {
  return (
    <Layout title="Categories | Admin">
      <TableComponent headers={CATEGORY_TABLE_HEADERS} rows={categories} />
    </Layout>
  );
};

export const CategoriesView = withStyles(categoriesStyle)(CategoriesViewC);
