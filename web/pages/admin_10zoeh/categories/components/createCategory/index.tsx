import React from 'react'
import OutsiceClickHandler from 'react-outside-click-handler'
import { TopBarDiv, ModalContent, CategoryInput } from './styles'
import { Button } from '../../../../../components/Button'
import { Modal } from '../../../../../components/modal/Modal'
import { useMutation } from 'react-apollo'
import { CREATE_CATEGORY } from '../../../../../graphql/mutation/createCategory'
import {
  CreateCategory as ICreateCategory,
  CreateCategoryVariables
} from '../../../../../graphql/generated/CreateCategory'
import { GET_CATEGORIES } from '../../../../../graphql/query/getCategories'
import { GetCategories } from '../../../../../graphql/generated/GetCategories'
import { GET_ALL_CATEGORY_SUMMARY } from '../../../../../graphql/query/admin/getAllCategorySummary'

interface Props {}

export const CreateCategory: React.FunctionComponent<Props> = () => {
  const [modalOpen, openCloseModal] = React.useState(false)
  const [name, setName] = React.useState('')
  const [createCategory] = useMutation<ICreateCategory, CreateCategoryVariables>(
    CREATE_CATEGORY,
    {
      refetchQueries: [{ query: GET_ALL_CATEGORY_SUMMARY }]
    }
  )

  const onSubmit = async () => {
    if (name) {
      await createCategory({ variables: { name } })
      openCloseModal(false)
    }
  }

  return (
    <TopBarDiv>
      <Modal open={modalOpen} onClose={() => openCloseModal(false)}>
        <OutsiceClickHandler onOutsideClick={() => openCloseModal(false)}>
          <ModalContent>
            <span>Category Name</span>
            <CategoryInput value={name} onChange={({ target: { value: v } }) => setName(v)} />
            <Button text='Add Category' wide color='primary' onClick={onSubmit} />
          </ModalContent>
        </OutsiceClickHandler>
      </Modal>
      <Button
        text='Add Category'
        color='primary'
        wide
        onClick={() => openCloseModal(!modalOpen)}
      />
    </TopBarDiv>
  )
}
