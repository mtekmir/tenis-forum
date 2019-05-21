import * as React from 'react';
import { Modal } from '../../../../../components/modal/Modal';
import { Content, AddForumDiv } from './styles';
import {
  GetAllCategoriesCategories,
  CreateForumVariables,
} from '../../../../../generated/apolloComponents';
import { Button } from '../../../../../components/Button';
import { Select } from '../../../../../components/forms/SelectInput';
import { StyledInput } from '../../../../../components/forms/TextInput';

interface Props {
  mutate: (v: CreateForumVariables) => void;
  categories: GetAllCategoriesCategories[];
}

export const AddForumView: React.FunctionComponent<Props> = ({
  categories,
  mutate,
}) => {
  const [modalOpen, openCloseModal] = React.useState(false);
  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState<{
    value?: string;
    label?: string;
  }>({});

  const onSubmit = () => {
    if (name && category.value) {
      mutate({ name, categoryId: parseInt(category.value, 10) });
      openCloseModal(false);
    }
  };

  return (
    <AddForumDiv>
      <Button
        text="Add Forum"
        color="primary"
        onClick={() => openCloseModal(true)}
      />
      <Modal open={modalOpen} onClose={() => openCloseModal(false)}>
        <Content>
          <span>Forum Name</span>
          <StyledInput
            width="21.5em"
            value={name}
            onChange={({ target: { value } }: any) => setName(value)}
          />
          <span>Category</span>
          <Select
            width="15em"
            options={categories.map(({ id, name: label }) => ({
              value: id.toString(),
              label,
            }))}
            value={category}
            onChange={(c: any) => setCategory(c)}
          />
          <Button text="Add Forum" color="primary" onClick={() => onSubmit()} />
        </Content>
      </Modal>
    </AddForumDiv>
  );
};
