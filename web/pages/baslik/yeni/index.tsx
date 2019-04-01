import * as React from 'react';
import {
  CreateThreadComponent,
  CreateThreadMutation,
  CreateThreadVariables,
} from '../../../generated/apolloComponents';
import { CreateThreadView, NewThreadValues } from './createThreadView';
import { AppContext } from '../../../context/AppContext';
import { MutationFn } from 'react-apollo';
import Router from 'next/router';

interface Props {
  forumId: string;
}

const NewThread = ({ forumId }: Props) => {
  const onSubmit = (
    submit: MutationFn<CreateThreadMutation, CreateThreadVariables>,
  ) => (v: NewThreadValues) => {
    submit({ variables: { forumId: parseInt(forumId, 10), ...v } });
  };

  const OnCompleted = (data: CreateThreadMutation) => {
    if (data.threadCreate.id) {
      Router.push(`/forum/${forumId}`);
    }
  };

  return (
    <CreateThreadComponent onCompleted={OnCompleted}>
      {mutation => <CreateThreadView onSubmit={onSubmit(mutation)} />}
    </CreateThreadComponent>
  );
};

NewThread.getInitialProps = ({ query: { forumId } }: AppContext) => {
  return { forumId };
};

export default NewThread;
