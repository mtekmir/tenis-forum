import * as React from 'react';
import {
  withStyles,
  WithStyles,
  Paper,
  Typography,
  Grid,
} from '@material-ui/core';
import threadStyle from './threadStyle';
import { GetThreadThreadGet } from '../../generated/apolloComponents';
import Layout from '../../components/Layout';
import { Post } from './post';
import { format } from 'date-fns';
import { Person, DateRange } from '@material-ui/icons';
import { NewPostContainer } from '../../components/newPost';

interface Props extends WithStyles<typeof threadStyle> {
  thread: GetThreadThreadGet;
}
const ThreadViewC: React.FunctionComponent<Props> = ({
  thread: { owner, posts, title, ...rest },
  classes,
}) => {
  const renderPosts = () => {
    return posts.map(({ author, text, id, createdAt }, idx) => (
      <Post
        username={author.username}
        createdAt={createdAt}
        text={text}
        key={id}
        index={idx + 2}
      />
    ));
  };

  return (
    <Layout title={`${title} | Tenis Forum`}>
      <Paper>
        <Typography variant="h4">{title}</Typography>
        <div className={classes.threadUserDateDiv}>
          <Person className={classes.threadUserDate_icon} />
          <Typography>{owner.username}</Typography>
          <text>&#183;</text>
          <div className={classes.threadUserDate_dateDiv}>
            <DateRange className={classes.threadUserDate_icon} />
            <Typography>{format(rest.createdAt, 'MMM DD, YYYY')}</Typography>
          </div>
        </div>
      </Paper>
      <Grid container spacing={24} className={classes.postsContainer}>
        <Grid item xs={12} className={classes.newPostContainer}>
          {renderPosts()}
          <NewPostContainer threadId={rest.id} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export const ThreadView = withStyles(threadStyle)(ThreadViewC);
