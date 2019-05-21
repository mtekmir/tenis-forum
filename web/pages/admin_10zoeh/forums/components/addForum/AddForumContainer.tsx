import * as React from 'react';
import {
  CreateForumComponent,
  GetAllCategoriesComponent,
} from '../../../../../generated/apolloComponents';
import { AddForumView } from './AddForumView';
import { getForums } from '../../../../../graphql/query/admin/getForums';

export const AddForumContainer: React.FunctionComponent = () => {
  return (
    <CreateForumComponent refetchQueries={[{ query: getForums }]}>
      {mutate => (
        <GetAllCategoriesComponent>
          {({ data, loading }) => {
            if (loading) {
              return <span>Loading...</span>;
            }

            if (data && data.categoryGetAll && data.categoryGetAll.categories) {
              return (
                <AddForumView
                  mutate={variables => mutate({ variables })}
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
