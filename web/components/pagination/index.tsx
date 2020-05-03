import React, { useState } from 'react'
import { PaginationDiv, PaginationContainer, PageButton } from './paginationStyle'
import { GoToPage } from './goToPage'
import { setPagePrefix, setKeys } from './utils'

interface Props {
  page: number
  setPage: (p: number) => void
  count: number
  getRows: (offset: number) => void
}

export const Pagination: React.FC<Props> = ({ count, getRows, page, setPage }) => {
  const onPageChange = (page: number) => {
    getRows((page - 1) * 50)
    setPage(page)
  }

  const renderPages = () => {
    const pageCount = Math.ceil(count / 50)

    const btn = (pageNumber: number) => (
      <PageButton selected={pageNumber === page} onClick={() => onPageChange(pageNumber)}>
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
              onPageChange={onPageChange}
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

  return (
    <PaginationDiv>
      <PaginationContainer>{renderPages()}</PaginationContainer>
    </PaginationDiv>
  )
}
