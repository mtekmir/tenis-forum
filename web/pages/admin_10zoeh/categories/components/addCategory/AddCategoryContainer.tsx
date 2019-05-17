import * as React from 'react';
import { CreateCategoryComponent } from '../../../../../generated/apolloComponents';
import { AddCategoryView } from './AddCategoryView';
import { getCategories } from '../../../../../graphql/query/getCategories';

interface Props {}
export const AddCategoryContainer: React.FunctionComponent<Props> = () => {
  return (
    <CreateCategoryComponent refetchQueries={[{ query: getCategories }]}>
      {mutate => (
        <AddCategoryView mutate={name => mutate({ variables: { name } })} />
      )}
    </CreateCategoryComponent>
  );
};
