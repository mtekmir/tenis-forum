import Router, { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useQuery, useMutation } from 'react-apollo'
import { GetThread, GetThreadVariables } from '../../graphql/generated/GetThread'
import { GET_THREAD } from '../../graphql/query/getThread'
import {
  GetThreadPosts,
  GetThreadPostsVariables,
} from '../../graphql/generated/GetThreadPosts'
import { GET_THREAD_POSTS } from '../../graphql/query/getThreadPosts'
import { DELETE_THREAD } from '../../graphql/mutation/admin/deleteThread'

export const useThreadState = () => {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [postIdToReport, setPostIdToReport] = useState<number | null>(null)
  const { user } = useContext(UserContext)
  const [deleteThread] = useMutation(DELETE_THREAD, {
    onCompleted: _ => Router.push('/'),
  })

  const { data: threadRes, loading: tLoading } = useQuery<GetThread, GetThreadVariables>(
    GET_THREAD,
    {
      variables: { id: router.query.id as string },
    }
  )

  const { data: postsRes, loading: pLoading, fetchMore } = useQuery<
    GetThreadPosts,
    GetThreadPostsVariables
  >(GET_THREAD_POSTS, {
    variables: { threadId: router.query.id as string, page: 1 },
  })

  const closeModal = () => {
    setReportModalOpen(false)
    setPostIdToReport(null)
  }

  const openReportPostModal = (id: number) => {
    setReportModalOpen(true)
    setPostIdToReport(id)
  }

  const handleFetchMore = (threadId: number, offset: number) => {
    fetchMore({
      variables: { threadId: threadId.toString(), page: 2 },
      // TODO: Fix pagination
      updateQuery: (prevRes, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prevRes
        }

        return fetchMoreResult
      },
    })
  }

  return {
    page,
    setPage,
    reportModalOpen,
    setReportModalOpen,
    postIdToReport,
    setPostIdToReport,
    user,
    handleFetchMore,
    isLoading: tLoading || pLoading,
    threadRes,
    postsRes,
    openReportPostModal,
    closeModal,
    deleteThread: (id: number) => deleteThread({ variables: { id } }),
  }
}
