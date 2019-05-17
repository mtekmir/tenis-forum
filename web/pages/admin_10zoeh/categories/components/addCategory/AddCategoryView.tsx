import * as React from 'react';
import OutsiceClickHandler from 'react-outside-click-handler';
import { TopBarDiv, ModalContent, CategoryInput } from './styles';
import { Button } from '../../../../../components/Button';
import { Modal } from '../../../../../components/modal/Modal';

interface Props {
  mutate: (name: string) => void;
}

export const AddCategoryView: React.FunctionComponent<Props> = ({ mutate }) => {
  const [modalOpen, openCloseModal] = React.useState(false);
  const [name, setName] = React.useState('');

  const onSubmit = () => {
    if (name) {
      mutate(name);
    }
  };

  return (
    <TopBarDiv>
      <Modal open={modalOpen} onClose={() => openCloseModal(false)}>
        <OutsiceClickHandler onOutsideClick={() => openCloseModal(false)}>
          <ModalContent>
            <span>Category Name</span>
            <CategoryInput
              value={name}
              onChange={({ target: { value: v } }) => setName(v)}
            />
            <Button
              text="Add Category"
              wide
              color="primary"
              onClick={onSubmit}
            />
          </ModalContent>
        </OutsiceClickHandler>
      </Modal>
      <Button
        text="Add Category"
        color="primary"
        wide
        onClick={() => openCloseModal(!modalOpen)}
      />
    </TopBarDiv>
  );
};
