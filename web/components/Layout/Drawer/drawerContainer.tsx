import * as React from 'react';
import { MeComponent } from '../../../generated/apolloComponents';
import { UserContextProvider } from '../../../context/userContext';
import { DrawerWrapper } from '.';

interface Props {}
export const DrawerContainer: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <MeComponent>
        {({ data }) => (
          <UserContextProvider value={{ user: data && data.me }}>
            <DrawerWrapper {...props} />
          </UserContextProvider>
        )}
      </MeComponent>
    </div>
  );
};
