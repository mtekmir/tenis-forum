import * as React from 'react';
import {
  Grid,
  Typography,
  Paper,
  WithStyles,
  withStyles,
  Divider,
} from '@material-ui/core';
import postStyle from './postStyle';
import { format } from 'date-fns';

interface Props extends WithStyles<typeof postStyle> {
  index: number;
  username: string;
  text: string;
  createdAt: Date;
}

const PostC: React.FunctionComponent<Props> = ({
  username,
  text,
  createdAt,
  index,
  classes,
}) => {
  return (
    <div className={classes.postContainer}>
      <div className={classes.userDiv}>
        <Typography>{username}</Typography>
      </div>
      <Paper className={classes.postContent}>
        <div className={classes.postContent_topDiv}>
          <Typography variant="caption">
            {format(createdAt, 'MMM DD, YYYY')}
          </Typography>
          <Typography variant="caption"># {index}</Typography>
        </div>
        <Divider />
        <Typography>{text}</Typography>
      </Paper>
    </div>
  );
};

export const Post = withStyles(postStyle)(PostC);
