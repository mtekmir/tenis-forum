import * as React from 'react';
import { CategoriesView } from './CategoriesView';
import { GetAllCategorySummaryComponent } from '../../../generated/apolloComponents';

interface Props {}
const CategoriesContainer: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <GetAllCategorySummaryComponent>
        {({ data, loading }) => {
          if (loading) {
            return <div>Loading...</div>;
          }
          if (
            data &&
            data.categoryGetSummaryAll &&
            data.categoryGetSummaryAll.categories
          ) {
            return (
              <CategoriesView
                categories={data.categoryGetSummaryAll.categories}
              />
            );
          }
        }}
      </GetAllCategorySummaryComponent>
    </div>
  );
};

export default CategoriesContainer;
