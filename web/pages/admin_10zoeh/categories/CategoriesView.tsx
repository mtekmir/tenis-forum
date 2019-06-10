import * as React from 'react';
import { CATEGORY_TABLE_HEADERS } from './categoryTableMenuItems';
import Layout from '../../../components/Layout';
import { AddCategoryContainer } from './components/addCategory/AddCategoryContainer';
import { TableContainer } from '../components/table/TableContainer';
import { Type } from '../components/table/drawer/DrawerContainer';
import { GetAllCategorySummaryCategories } from '../../../generated/apolloComponents';

interface Props {
  categories: GetAllCategorySummaryCategories[];
}

export const CategoriesView: React.FC<Props> = ({ categories }) => {
  return (
    <Layout title="Categories | Admin">
      <AddCategoryContainer />
      <TableContainer
        headers={CATEGORY_TABLE_HEADERS}
        rows={categories}
        type={Type.C}
      />
    </Layout>
  );
};
