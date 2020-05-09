import React from 'react'
import { Modal } from '../../../../../components/modal/Modal'
import { Content, AddForumDiv } from './styles'
import { Button } from '../../../../../components/Button'
import { Select } from '../../../../../components/forms/SelectInput'
import { StyledInput } from '../../../../../components/forms/TextInput'
import { useMutation, useQuery } from 'react-apollo'
import { CreateForum, CreateForumVariables } from '../../../../../graphql/generated/CreateForum'
import { CREATE_FORUM } from '../../../../../graphql/mutation/createForum'
import { GET_ALL_CATEGORY_SUMMARY } from '../../../../../graphql/query/admin/getAllCategorySummary'
import { GetAllCategorySummary } from '../../../../../graphql/generated/GetAllCategorySummary'
import { GET_ALL_FORUMS } from '../../../../../graphql/query/admin/getAllForums'

interface Props {}

export const AddForum: React.FC<Props> = () => {
  const [createForum] = useMutation<CreateForum, CreateForumVariables>(CREATE_FORUM, {
    refetchQueries: [{ query: GET_ALL_FORUMS }]
  })
  const { data, loading, error } = useQuery<GetAllCategorySummary>(GET_ALL_CATEGORY_SUMMARY)
  if (loading) {
    return <span>Loading...</span>
  }
  const {
    categoryGetSummaryAll: { categories }
  } = data
  const [modalOpen, openCloseModal] = React.useState(false)
  const [name, setName] = React.useState('')
  const [category, setCategory] = React.useState<{
    value?: string
    label?: string
  }>({})

  const onSubmit = () => {
    if (name && category.value) {
      createForum({ variables: { name, categoryId: parseInt(category.value, 10) } })
      openCloseModal(false)
    }
  }

  return (
    <AddForumDiv>
      <Button text='Add Forum' color='primary' onClick={() => openCloseModal(true)} />
      <Modal open={modalOpen} onClose={() => openCloseModal(false)}>
        <Content>
          <span>Forum Name</span>
          <StyledInput
            width='21.5em'
            value={name}
            onChange={({ target: { value } }: any) => setName(value)}
          />
          <span>Category</span>
          <Select
            width='15em'
            options={categories.map(({ id, name: label }) => ({
              value: id.toString(),
              label
            }))}
            value={category}
            onChange={(c: any) => setCategory(c)}
          />
          <Button text='Add Forum' color='primary' onClick={() => onSubmit()} />
        </Content>
      </Modal>
    </AddForumDiv>
  )
}
