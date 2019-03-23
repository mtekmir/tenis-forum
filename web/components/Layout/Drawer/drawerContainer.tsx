import * as React from 'react';
import { MeComponent } from '../../../generated/apolloComponents';
import { UserContextProvider } from '../../../context/userContext';
import { DrawerWrapper } from '.';

export const DrawerContainer: React.FunctionComponent = props => {
  return (
    <MeComponent>
      {({ data }) => (
        <UserContextProvider value={{ user: data && data.me }}>
          <DrawerWrapper {...props} />
        </UserContextProvider>
      )}
    </MeComponent>
  );
};
