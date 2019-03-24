import * as React from 'react';
import {
  Grid,
  Typography,
  Paper,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import { GetCategoriesCategories } from '../../generated/apolloComponents';
import indexStyle from './indexStyle';
import Link from 'next/link';

interface Props extends WithStyles<typeof indexStyle> {
  categories: GetCategoriesCategories[];
}

const IndexViewC: React.FunctionComponent<Props> = ({
  categories,
  classes,
}) => {
  const renderCategories = () => {
    return categories.map(({ id, name, forums }) => (
      <Grid key={id} item xs={12}>
        <Paper>
          <Typography classes={{ root: classes.categoryTitle }}>
            {name}
          </Typography>
          {forums.map(({ id, name }) => (
            <div key={id}>
              <Link href={`/forum/${id}`}>
                <a>{name}</a>
              </Link>
            </div>
          ))}
        </Paper>
      </Grid>
    ));
  };

  return (
    <Grid spacing={24} container>
      {renderCategories()}
    </Grid>
  );
};

export const IndexView = withStyles(indexStyle)(IndexViewC);
