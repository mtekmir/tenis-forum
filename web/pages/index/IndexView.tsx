import * as React from 'react';
import { GetCategoriesCategories } from '../../generated/apolloComponents';
import { CategoryTitle, ForumDiv, ForumTitle, CategoryDiv } from './indexStyle';
import Link from 'next/link';

interface Props {
  categories: GetCategoriesCategories[];
}

export const IndexView: React.FunctionComponent<Props> = ({ categories }) => {
  const renderCategories = () => {
    return categories.map(({ id, name, forums }) => (
      <CategoryDiv key={id}>
        <CategoryTitle>{name}</CategoryTitle>
        {forums.map(({ id, name }) => (
          <ForumDiv key={id}>
            <ForumTitle>
              <Link href={`/forum/${id}`}>
                <a>{name}</a>
              </Link>
            </ForumTitle>
          </ForumDiv>
        ))}
      </CategoryDiv>
    ));
  };

  return <React.Fragment>{renderCategories()}</React.Fragment>;
};
