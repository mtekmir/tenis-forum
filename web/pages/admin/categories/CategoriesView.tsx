import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import categoriesStyle from './categoriesStyle';
import { GetAllCategoriesCategoryGetAll } from '../../../generated/apolloComponents';

interface Props extends WithStyles<typeof categoriesStyle> {
  categories: GetAllCategoriesCategoryGetAll;
}

const CategoriesViewC: React.ComponentType<Props> = () => {
  return <div />;
};

export const CategoriesView = withStyles(categoriesStyle)(CategoriesViewC);
