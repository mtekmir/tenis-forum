import * as React from 'react';
import { CreateThreadComponent } from '../../../generated/apolloComponents';
import { CreateThreadView } from './createThreadView';

const NewThread = () => {
  return (
    <CreateThreadComponent>{() => <CreateThreadView />}</CreateThreadComponent>
  );
};

export default NewThread;
