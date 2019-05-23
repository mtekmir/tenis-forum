import * as React from 'react';
import { DrawerView } from './DrawerView';
import { ApolloClient } from 'apollo-boost';
import { GetForumQuery } from '../../../../generated/apolloComponents';
import { getForum } from '../../../../graphql/query/getForum';

export enum Type {
  U = 'user',
  C = 'category',
  F = 'forum',
  T = 'thread',
  P = 'post',
}

export interface Args {
  type: Type;
  id: number;
}

interface HistoryNode {
  id: number;
  type: Type;
  data: any;
}

interface Props {
  args: Args;
  client: ApolloClient<any>;
}

export const DrawerContainer: React.FunctionComponent<Props> = ({
  args,
  client,
}) => {
  const [openDrawers, setOpenDrawers] = React.useState([]);
  const [history, setHistory] = React.useState<HistoryNode[]>([]);

  const handleClose = () => {
    setOpenDrawers(openDrawers.slice(0, -1));
    setTimeout(() => setHistory(history.slice(0, -1)), 500);
  };

  const request = async (reqArgs: Args, root: boolean) => {
    const handleSetResults = (newNode: HistoryNode, openDrawer: number) => {
      if (root) {
        setHistory([newNode]);
        setTimeout(() => setOpenDrawers([openDrawer]), 10);
      } else {
        setHistory([...history, newNode]);
        setTimeout(() => setOpenDrawers([...openDrawers, openDrawer]), 10);
      }
    };

    if (!reqArgs) return;
    switch (reqArgs.type) {
      case Type.F: {
        const { data } = await client.query<GetForumQuery>({
          query: getForum,
          variables: { id: reqArgs.id, limit: 5 },
        });
        if (data) {
          handleSetResults(
            { data: data.forumGet.forum, ...reqArgs },
            reqArgs.id,
          );
        }
      }

      // --------------------------
      case Type.T: {
        const { data } = await client.query<GetForumQuery>({
          query: getForum,
          variables: { id: reqArgs.id, limit: 5 },
        });
        if (data) {
          handleSetResults(
            { data: data.forumGet.forum, ...reqArgs },
            reqArgs.id,
          );
        }
      }
    }
  };

  React.useEffect(() => {
    request(args, true);
  }, [args]);

  const renderDrawers = () => {
    return history.map(({ data, id }) => (
      <DrawerView
        key={id}
        data={data}
        open={openDrawers[openDrawers.length - 1]}
        onClose={handleClose}
      />
    ));
  };

  return <>{renderDrawers()}</>;
};
