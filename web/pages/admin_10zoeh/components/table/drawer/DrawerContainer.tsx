import * as React from 'react'
import { DrawerView } from './DrawerView'
import { ApolloClient } from 'apollo-boost'
import { GET_FORUM } from '../../../../../graphql/query/getForum'
import { GET_THREAD } from '../../../../../graphql/query/getThread'
import { GET_POST } from '../../../../../graphql/query/admin/getPost'
import { DELETE_THREAD } from '../../../../../graphql/mutation/admin/deleteThread'
import { ConfirmationModal } from '../../../../../components/modal/ConfirmationModal'
import { DELETE_POST } from '../../../../../graphql/mutation/admin/deletePost'
import { GET_CATEGORY } from '../../../../../graphql/query/admin/getCategory'
import { GET_USER } from '../../../../../graphql/query/admin/getUser'
import { DeleteThread, DeleteThreadVariables } from '../../../../../graphql/generated/DeleteThread'
import { DeletePost, DeletePostVariables } from '../../../../../graphql/generated/DeletePost'
import { GetCategory, GetCategoryVariables } from '../../../../../graphql/generated/GetCategory'
import { GetThread, GetThreadVariables } from '../../../../../graphql/generated/GetThread'
import { GetForum, GetForumVariables } from '../../../../../graphql/generated/GetForum'
import { GetPost, GetPostVariables } from '../../../../../graphql/generated/GetPost'
import { GetUser, GetUserVariables } from '../../../../../graphql/generated/GetUser'

export enum Type {
  U = 'User',
  C = 'Category',
  F = 'Forum',
  T = 'Thread',
  P = 'Post'
}

export interface Args {
  type: Type
  id: any
}

export interface HistoryNode {
  id: any
  type: Type
  data?: any
}

interface Props {
  args: Args
  client: ApolloClient<any>
}

export const DrawerContainer: React.FunctionComponent<Props> = ({ args, client }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [history, setHistory] = React.useState<HistoryNode[]>([])
  const [deleteHistory, setDeleteHistory] = React.useState<HistoryNode[]>([])

  const handleClose = () => {
    setDrawerOpen(false)
    setHistory([])
  }

  const goBack = () => {
    setHistory(history => history.slice(0, -1))
  }

  const askForDelete = ({ id, type }: Args) => {
    setDeleteHistory(deleteHistory => [...deleteHistory, { id, type }])
    setModalOpen(true)
  }

  const cancelDelete = () => {
    setDeleteHistory(deleteHistory.slice(0, -1))
    setModalOpen(false)
  }

  const deleteEntity = async ({ id, type }: Args) => {
    const replaceHistory = async (args: Args) => {
      const newData = await request(args, false, true)
      const idx = history.findIndex(({ id, type }) => id === args.id && type === args.type)
      const newHistory = history
      newHistory[idx].data = newData

      setHistory(newHistory)
    }

    if (!id) return

    switch (type) {
      case Type.T: {
        const { data } = await client.mutate<DeleteThread, DeleteThreadVariables>({
          mutation: DELETE_THREAD,
          variables: { id }
        })

        if (data) {
          await replaceHistory({
            id: data.threadDelete.forum.id,
            type: Type.F
          })
        }
      }
      case Type.P: {
        const { data } = await client.mutate<DeletePost, DeletePostVariables>({
          mutation: DELETE_POST,
          variables: { id }
        })

        if (data) {
          // console.log(data);
          await replaceHistory({
            id: data.postDelete.thread.id,
            type: Type.T
          })
        }
      }
    }
    goBack()

    setModalOpen(false)
  }

  const request = async (reqArgs: Args, root: boolean, onlyRes: boolean = false) => {
    const handleSetResults = (newNode: HistoryNode) => {
      if (root) {
        setHistory([newNode])
      } else {
        setHistory([...history, newNode])
      }
      if (!drawerOpen) setDrawerOpen(true)
    }

    if (!reqArgs) return
    switch (reqArgs.type) {
      case Type.C: {
        const { data } = await client.query<GetCategory, GetCategoryVariables>({
          query: GET_CATEGORY,
          variables: { id: reqArgs.id, limit: 5 },
          fetchPolicy: onlyRes ? 'network-only' : 'cache-first'
        })
        if (data && !onlyRes) {
          return handleSetResults({ data: data.categoryGet, ...reqArgs })
        } else {
          return data.categoryGet
        }
      }

      case Type.F: {
        const { data } = await client.query<GetForum, GetForumVariables>({
          query: GET_FORUM,
          variables: { id: reqArgs.id, limit: 5 },
          fetchPolicy: onlyRes ? 'network-only' : 'cache-first'
        })
        if (data && !onlyRes) {
          return handleSetResults({ data: data.forumGet.forum, ...reqArgs })
        } else {
          return data.forumGet.forum
        }
      }

      case Type.T: {
        const { id } = reqArgs
        const { data } = await client.query<GetThread, GetThreadVariables>({
          query: GET_THREAD,
          variables: {
            id: id.toString()
          },
          fetchPolicy: onlyRes ? 'network-only' : 'cache-first'
        })

        if (data && !onlyRes) {
          return handleSetResults({ data: data.threadGet.thread, ...reqArgs })
        } else {
          return data.threadGet.thread
        }
      }

      case Type.P: {
        const { data } = await client.query<GetPost, GetPostVariables>({
          query: GET_POST,
          variables: { id: reqArgs.id },
          fetchPolicy: onlyRes ? 'network-only' : 'cache-first'
        })

        if (data && !onlyRes) {
          return handleSetResults({ data: data.postGet, ...reqArgs })
        } else {
          return data.postGet
        }
      }

      case Type.U: {
        const { data } = await client.query<GetUser, GetUserVariables>({
          query: GET_USER,
          variables: { id: reqArgs.id },
          fetchPolicy: onlyRes ? 'network-only' : 'cache-first'
        })

        if (data && !onlyRes) {
          return handleSetResults({ data: data.userGet, ...reqArgs })
        } else {
          return data.userGet
        }
      }
    }
  }

  React.useEffect(() => {
    request(args, true)
  }, [args])

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
        text='Delete?'
        onConfirm={() => deleteEntity(deleteHistory[deleteHistory.length - 1])}
      />
    </>
  )
}
