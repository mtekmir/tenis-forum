import * as React from 'react';
import { DrawerView } from './DrawerView';
import { ApolloClient } from 'apollo-boost';
import {
  GetForumQuery,
  GetThreadQuery,
  GetPostQuery,
} from '../../../generated/apolloComponents';
import { getForum } from '../../../graphql/query/getForum';
import { getThread } from '../../../graphql/query/getThread';
import { getPost } from '../../../graphql/query/admin/getPost';

export enum Type {
  U = 'User',
  C = 'Category',
  F = 'Forum',
  T = 'Thread',
  P = 'Post',
}

export interface Args {
  type: Type;
  id: number;
}

export interface HistoryNode {
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
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [history, setHistory] = React.useState<HistoryNode[]>([]);

  const handleClose = () => {
    setDrawerOpen(false);
    setHistory([]);
  };

  const goBack = () => {
    setHistory(history => history.slice(0, -1));
  };

  const request = async (reqArgs: Args, root: boolean) => {
    const handleSetResults = (newNode: HistoryNode) => {
      if (root) {
        setHistory([newNode]);
      } else {
        setHistory([...history, newNode]);
      }
      if (!drawerOpen) setDrawerOpen(true);
    };

    if (!reqArgs) return;
    switch (reqArgs.type) {
      case Type.F: {
        const { data } = await client.query<GetForumQuery>({
          query: getForum,
          variables: { id: reqArgs.id, limit: 5 },
        });
        if (data) {
          return handleSetResults({ data: data.forumGet.forum, ...reqArgs });
        }
      }

      // --------------------------
      case Type.T: {
        const { data } = await client.query<GetThreadQuery>({
          query: getThread,
          variables: { id: reqArgs.id, limit: 5 },
        });

        if (data) {
          return handleSetResults({ data: data.threadGet.thread, ...reqArgs });
        }
      }

      case Type.P: {
        const { data } = await client.query<GetPostQuery>({
          query: getPost,
          variables: { id: reqArgs.id },
        });

        if (data) {
          return handleSetResults({ data: data.postGet, ...reqArgs });
        }
      }
    }
  };

  React.useEffect(() => {
    request(args, true);
  }, [args]);

  return (
    <DrawerView
      open={drawerOpen}
      onClose={handleClose}
      goBack={goBack}
      getDetail={(args: Args) => request(args, false)}
      history={history}
    />
  );
};
