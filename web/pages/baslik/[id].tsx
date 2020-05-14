import React from 'react'
import Router from 'next/router'

import { PostsDiv } from './threadStyle'
import Layout from '../../components/Layout'
import { Post } from './components/post'
import { NewPost } from './components/newPost'
import { Pagination } from '../../components/pagination'
import { ThreadTitle } from './components/title'
import { ReportModal } from './components/reportModal'
import { useThreadState } from './useThreadState'
import { UnderlinedButton } from '../../components/Button'
import { Align } from '../../components/Align'

interface Props {}

const Thread: React.FunctionComponent<Props> = () => {
  const {
    isLoading,
    threadRes,
    postsRes,
    openReportPostModal,
    closeModal,
    handleFetchMore,
    page,
    postIdToReport,
    reportModalOpen,
    setPage,
    setReportModalOpen,
    user,
    deleteThread,
  } = useThreadState()

  if (isLoading) {
    return <div>Loading</div>
  }

  const {
    threadGet: {
      thread: { title, owner, ...rest },
    },
  } = threadRes
  const {
    threadGetPosts: { posts, count },
  } = postsRes

  const renderPosts = () => {
    return posts.map(({ author, id, ...post }, idx) => (
      <Post
        {...author}
        {...post}
        key={id}
        index={idx + 1}
        postId={id}
        loggedInUser={user}
        page={page}
        threadId={rest.id}
        openReportPostModal={openReportPostModal}
      />
    ))
  }

  return (
    <Layout title={`${title} | Tenis Forum`}>
      <ReportModal
        open={reportModalOpen}
        onClose={closeModal}
        postId={postIdToReport}
        threadId={rest.id}
      />
      <ThreadTitle
        title={title}
        threadId={rest.id}
        owner={owner}
        createdAt={rest.createdAt}
        user={user}
        openReportModal={() => setReportModalOpen(true)}
        deleteThread={deleteThread}
      />
      <PostsDiv>
        <Pagination
          page={page}
          setPage={setPage}
          count={count}
          getRows={offset => handleFetchMore(offset, rest.id)}
        />
        {renderPosts()}
        {user ? (
          <NewPost threadId={rest.id} page={page} count={count} />
        ) : (
          <Align justify='flex-end' padding={0.5}>
            <UnderlinedButton onClick={() => Router.push('/uyelik/giris')}>
              Cevap yazabilmek için üye olmanız gerekiyor
            </UnderlinedButton>
          </Align>
        )}
      </PostsDiv>
    </Layout>
  )
}

export default Thread
