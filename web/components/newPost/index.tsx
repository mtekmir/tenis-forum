import * as React from 'react';
import {
  CreatePostComponent,
  CreatePostMutation,
  CreatePostVariables,
} from '../../generated/apolloComponents';
import { NewPostView } from './NewPostView';
import { MutationFn } from 'react-apollo';
import { getThread } from '../../graphql/query/getThread';

interface Props {
  threadId: number;
}

export const NewPostContainer: React.FunctionComponent<Props> = ({
  threadId,
}) => {
  const submit = (
    mutation: MutationFn<CreatePostMutation, CreatePostVariables>,
  ) => (text: string) => {
    if (!text.trim()) {
      return;
    }
    mutation({ variables: { text, threadId } });
  };

  // const update: MutationUpdaterFn<CreatePostMutation> = (
  //   cache,
  //   { data: { postCreate } },
  // ) => {
  //   console.log(
  //     cache.readQuery({ query: getThread, variables: { id: threadId } }),
  //   );
  //   const { threadGet } = cache.readQuery({
  //     query: getThread,
  //     variables: { id: threadId },
  //   });

  //   cache.writeQuery({
  //     query: getThread,
  //     data: {
  //       ...threadGet,
  //       posts: [...threadGet.posts, postCreate],
  //     },
  //   });
  // };

  return (
    <CreatePostComponent
      refetchQueries={[{ query: getThread, variables: { id: threadId } }]}
    >
      {mutation => <NewPostView onSubmit={submit(mutation)} />}
    </CreatePostComponent>
  );
};
