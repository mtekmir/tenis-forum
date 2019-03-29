import { format } from 'date-fns';
import * as React from 'react';
import { GetForumForumGet } from '../../generated/apolloComponents';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Typography, WithStyles, withStyles, Button } from '@material-ui/core';
import forumStyle from './forumStyle';
import { CustomLink } from '../../components/customLink';

interface Props extends WithStyles<typeof forumStyle> {
  forum: GetForumForumGet;
}
const ForumViewC: React.FunctionComponent<Props> = ({ forum, classes }) => {
  const renderThreads = () => {
    return forum.threads.map(({ id, title, owner, createdAt }) => (
      <div key={id} className={classes.forumContainer}>
        <Link href={`/thread/${id}`} as={`/baslik/${id}`}>
          <a>{title}</a>
        </Link>
        <div className={classes.ownerDateContainer}>
          <div>
            <Typography>{owner.username}</Typography>
          </div>
          <text>&#183;</text>
          <div>
            <Typography>{format(createdAt, 'MMM DD, YYYY')}</Typography>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Layout title={`${forum.name} | Tenis Forum`}>
      <div className={classes.topDiv}>
        <div>
          <Typography>Forum > {forum.category.name} ></Typography>
        </div>
        <Typography variant="h5">{forum.name}</Typography>
        <div className={classes.divider}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            component={CustomLink(`/forum/${forum.id}/baslik/yeni`)}
          >
            Yeni Başlık
          </Button>
        </div>
      </div>
      {renderThreads()}
    </Layout>
  );
};

export const ForumView = withStyles(forumStyle)(ForumViewC);
