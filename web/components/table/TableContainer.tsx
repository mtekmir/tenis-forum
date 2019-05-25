import * as React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { TableComponent, Header } from './Table';
import { DrawerContainer, Args, Type } from './drawer/DrawerContainer';

interface Props {
  headers: Header[];
  rows: Array<{ [key: string]: any }>;
  type: Type;
}

export const TableContainer: React.FunctionComponent<Props> = props => {
  const [args, setArgs] = React.useState<Args>(null);

  const openDetailDrawer = ({ id, type }: Args) => {
    setArgs({ id, type: type || props.type });
  };

  return (
    <div>
      <ApolloConsumer>
        {client => (
          <>
            <DrawerContainer client={client} args={args} />
            <TableComponent getDetail={openDetailDrawer} {...props} />
          </>
        )}
      </ApolloConsumer>
    </div>
  );
};
