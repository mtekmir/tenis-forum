import * as React from 'react'
import { PaginationDiv, PaginationContainer, PageButton } from './paginationStyle'
import { GoToPage } from './goToPage'
import { setPagePrefix, setKeys } from './utils'

interface Props {
  count: number
  getRows: (offset: number) => void
}

interface State {
  page: number
}

export class Pagination extends React.PureComponent<Props, State> {
  public readonly state: State = {
    page: 1,
  }

  onPageChange = (page: number) => {
    this.props.getRows((page - 1) * 15)
    this.setState({ page })
  }

  renderPages = () => {
    const { count } = this.props
    const { page } = this.state
    const pageCount = Math.ceil(count / 15)

    const btn = (pageNumber: number) => (
      <PageButton selected={pageNumber === page} onClick={() => this.onPageChange(pageNumber)}>
        <span>{pageNumber}</span>
      </PageButton>
    )

    if (pageCount > 5) {
      const keys = setKeys(page, pageCount)

      return keys.map((key, idx) => {
        if (key === '...') {
          const pagePrefix = setPagePrefix(page, keys, pageCount, idx)
          return (
            <GoToPage
              pageCount={pageCount}
              pagePrefix={pagePrefix}
              onPageChange={this.onPageChange}
            />
          )
        }

        return btn(key as number)
      })
    } else {
      return Array.from(Array(pageCount + 1).keys())
        .slice(1)
        .map(n => <React.Fragment key={n}>{btn(n)}</React.Fragment>)
    }
  }

  render() {
    return (
      <PaginationDiv>
        <PaginationContainer>{this.renderPages()}</PaginationContainer>
      </PaginationDiv>
    )
  }
}
