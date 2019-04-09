import * as React from 'react';
import { CategoriesView } from './CategoriesView';
import { GetAllCategoriesComponent } from '../../../generated/apolloComponents';

interface Props {}
const CategoriesContainer: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <GetAllCategoriesComponent>
        {({ data, loading }) => {
          if (data && data.categoryGetAll && data.categoryGetAll.categories) {
            return (
              <CategoriesView
                isFetching={loading}
                categories={data.categoryGetAll.categories}
              />
            );
          }
        }}
      </GetAllCategoriesComponent>
    </div>
  );
};

export default CategoriesContainer;
