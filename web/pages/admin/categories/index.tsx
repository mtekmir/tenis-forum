import * as React from 'react';
import { LinearProgress } from '@material-ui/core';
import { CategoriesView } from './CategoriesView';
import { GetAllCategoriesComponent } from '../../../generated/apolloComponents';

interface Props {}
const CategoriesContainer: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <GetAllCategoriesComponent>
        {({ data, loading }) => {
          if (loading) {
            return <LinearProgress />;
          }

          if (data && data.categoryGetAll) {
            return <CategoriesView categories={data.categoryGetAll} />;
          }
        }}
      </GetAllCategoriesComponent>
    </div>
  );
};

export default CategoriesContainer;
