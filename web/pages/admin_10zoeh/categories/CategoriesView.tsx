import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import categoriesStyle from './categoriesStyle';
import { GetAllCategoriesCategories } from '../../../generated/apolloComponents';
import { CATEGORY_TABLE_HEADERS } from './categoryTableMenuItems';
import Layout from '../../../components/Layout';
import { AddCategoryContainer } from './components/addCategory/AddCategoryContainer';
import { TableContainer } from '../../../components/table/TableContainer';
import { Type } from '../../../components/table/drawer/DrawerContainer';

interface Props extends WithStyles<typeof categoriesStyle> {
  categories: GetAllCategoriesCategories[];
}

const CategoriesViewC: React.ComponentType<Props> = ({ categories }) => {
  return (
    <Layout title="Categories | Admin">
      <AddCategoryContainer />
      <TableContainer headers={CATEGORY_TABLE_HEADERS} rows={categories} type={Type.C} />
    </Layout>
  );
};

export const CategoriesView = withStyles(categoriesStyle)(CategoriesViewC);
