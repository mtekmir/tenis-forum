import * as React from 'react';
import { Drawer } from './styles';
import { GetForumForum } from '../../../../generated/apolloComponents';
import { ForumContent } from './forumDetail/ForumContent';
import { TiTimes } from 'react-icons/ti';

interface Props {
  open: boolean;
  data: any;
  forum?: GetForumForum;
  onClose: () => void;
}

export const DrawerView: React.FunctionComponent<Props> = ({
  open,
  onClose,
  data,
}) => {
  const renderContent = () => {
    return data && <ForumContent forum={data} />;
  };

  return (
    <Drawer open={open}>
      <div className="close-div">
        <TiTimes onClick={onClose} />
      </div>
      {renderContent()}
    </Drawer>
  );
};
