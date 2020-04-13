import * as React from 'react'
import { Title } from '../../styles'
import { Args, Type } from '../../DrawerContainer'
import { TableComponent } from '../../../TableComponent'
import { CATEGORY_DETAIL_TABLE_HEADERS } from './tableHeaders'
import { GetCategory_categoryGet } from '../../../../../../../generated/GetCategory'

interface Props {
  category: GetCategory_categoryGet
  getDetail: (args: Args) => void
}

export const CategoryContent: React.FunctionComponent<Props> = ({
  category: { id, forums, name },
  getDetail
}) => {
  return (
    <div>
      <Title>
        <span>Category #{id}</span>
        {name}
      </Title>
      <TableComponent
        rows={forums}
        type={Type.F}
        headers={CATEGORY_DETAIL_TABLE_HEADERS}
        getDetail={getDetail}
      />
    </div>
  )
}
