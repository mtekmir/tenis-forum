import * as React from 'react';
import {
  CreateForumComponent,
  GetAllCategoriesComponent,
} from '../../../../../generated/apolloComponents';
import { AddForumView } from './AddForumView';

export const AddForumContainer: React.FunctionComponent = () => {
  return (
    <CreateForumComponent>
      {mutate => (
        <GetAllCategoriesComponent>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>;
            }

            if (data && data.categoryGetAll && data.categoryGetAll.categories) {
              return (
                <AddForumView
                  mutate={mutate}
                  categories={data.categoryGetAll.categories}
                />
              );
            }
          }}
        </GetAllCategoriesComponent>
      )}
    </CreateForumComponent>
  );
};
