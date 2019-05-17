import * as React from 'react';
import { Modal } from '../../../../../components/modal/Modal';
import { Content, Input } from './styles';
import { GetAllCategoriesCategories } from '../../../../../generated/apolloComponents';

interface Props {
  mutate: () => void;
  categories: GetAllCategoriesCategories[];
}

export const AddForumView: React.FunctionComponent<Props> = () => {
  const [modalOpen, openCloseModal] = React.useState(false);
  const [name, setName] = React.useState('');
  return (
    <Modal open={modalOpen} onClose={() => openCloseModal(false)}>
      <Content>
        <span>Forum Name</span>
        <Input
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </Content>
    </Modal>
  );
};
