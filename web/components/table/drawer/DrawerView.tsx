import * as React from 'react';
import { Drawer } from './styles';
import { ForumContent } from './components/forumDetail/ForumContent';
import { Type, Args, HistoryNode } from './DrawerContainer';
import { ThreadContent } from './components/threadDetail/ThreadContent';
import { TopDiv } from './components/topDiv/TopDiv';
import { PostContent } from './components/postDetail/PostContent';

interface Props {
  open: boolean;
  getDetail: (args: Args) => void;
  askForDelete: (args: Args) => void;
  onClose: () => void;
  goBack: () => void;
  history: HistoryNode[];
}

export const DrawerView: React.FunctionComponent<Props> = ({
  open,
  onClose,
  goBack,
  getDetail,
  askForDelete,
  history,
}) => {
  const renderContent = () => {
    const lastNode = history[history.length - 1];
    if (!lastNode) return null;

    switch (lastNode.type) {
      case Type.F:
        return <ForumContent getDetail={getDetail} forum={lastNode.data} />;
      case Type.T:
        return (
          <ThreadContent
            getDetail={getDetail}
            askForDelete={askForDelete}
            thread={lastNode.data}
          />
        );
      case Type.P:
        return <PostContent getDetail={getDetail} post={lastNode.data} />;
    }
  };

  return (
    <Drawer open={open}>
      <TopDiv history={history} onClose={onClose} goBack={goBack} />
      {renderContent()}
    </Drawer>
  );
};
