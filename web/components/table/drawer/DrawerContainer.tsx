import * as React from 'react';
import { DrawerView } from './DrawerView';
import { ApolloClient } from 'apollo-boost';
import {
  GetForumQuery,
  GetThreadQuery,
  GetPostQuery,
  DeleteThreadMutation,
  DeletePostMutation,
} from '../../../generated/apolloComponents';
import { getForum } from '../../../graphql/query/getForum';
import { getThread } from '../../../graphql/query/getThread';
import { getPost } from '../../../graphql/query/admin/getPost';
import { deleteThread } from '../../../graphql/query/admin/deleteThread';
import { ConfirmationModal } from '../../modal/ConfirmationModal';
import { deletePost } from '../../../graphql/query/admin/deletePost';

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
  data?: any;
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
  const [modalOpen, setModalOpen] = React.useState(false);
  const [history, setHistory] = React.useState<HistoryNode[]>([]);
  const [deleteHistory, setDeleteHistory] = React.useState<HistoryNode[]>([]);

  const handleClose = () => {
    setDrawerOpen(false);
    setHistory([]);
  };

  const goBack = () => {
    setHistory(history => history.slice(0, -1));
  };

  const askForDelete = ({ id, type }: Args) => {
    setDeleteHistory(deleteHistory => [...deleteHistory, { id, type }]);
    setModalOpen(true);
  };

  const cancelDelete = () => {
    setDeleteHistory(deleteHistory.slice(0, -1));
    setModalOpen(false);
  };

  const deleteEntity = async ({ id, type }: Args) => {
    const replaceHistory = async (args: Args) => {
      const newData = await request(args, false, true);
      const idx = history.findIndex(
        ({ id, type }) => id === args.id && type === args.type,
      );
      const newHistory = history;
      newHistory[idx].data = newData;

      setHistory(newHistory);
    };

    if (!id) return;

    switch (type) {
      case Type.T: {
        const { data } = await client.mutate<DeleteThreadMutation>({
          mutation: deleteThread,
          variables: { id },
        });

        if (data) {
          await replaceHistory({
            id: data.threadDelete.forum.id,
            type: Type.F,
          });
        }
      }
      case Type.P: {
        const { data } = await client.mutate<DeletePostMutation>({
          mutation: deletePost,
          variables: { id },
        });

        if (data) {
          // console.log(data);
          await replaceHistory({
            id: data.postDelete.thread.id,
            type: Type.T,
          });
        }
      }
    }
    goBack();

    setModalOpen(false);
  };

  const request = async (
    reqArgs: Args,
    root: boolean,
    onlyRes: boolean = false,
  ) => {
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
          fetchPolicy: onlyRes ? 'network-only' : 'cache-first',
        });
        if (data && !onlyRes) {
          return handleSetResults({ data: data.forumGet.forum, ...reqArgs });
        } else {
          return data.forumGet.forum;
        }
      }

      // --------------------------
      case Type.T: {
        const { data } = await client.query<GetThreadQuery>({
          query: getThread,
          variables: { id: reqArgs.id, limit: 5 },
          fetchPolicy: onlyRes ? 'network-only' : 'cache-first',
        });

        if (data && !onlyRes) {
          return handleSetResults({ data: data.threadGet.thread, ...reqArgs });
        } else {
          return data.threadGet.thread;
        }
      }

      case Type.P: {
        const { data } = await client.query<GetPostQuery>({
          query: getPost,
          variables: { id: reqArgs.id },
          fetchPolicy: onlyRes ? 'network-only' : 'cache-first',
        });

        if (data && !onlyRes) {
          return handleSetResults({ data: data.postGet, ...reqArgs });
        } else {
          return data.postGet;
        }
      }
    }
  };

  React.useEffect(() => {
    request(args, true);
  }, [args]);

  return (
    <>
      <DrawerView
        open={drawerOpen}
        onClose={handleClose}
        goBack={goBack}
        getDetail={(args: Args) => request(args, false)}
        askForDelete={askForDelete}
        history={history}
      />
      <ConfirmationModal
        onCancel={cancelDelete}
        open={modalOpen}
        text="Delete?"
        onConfirm={() => deleteEntity(deleteHistory[deleteHistory.length - 1])}
      />
    </>
  );
};
