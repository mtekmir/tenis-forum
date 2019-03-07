import * as next from 'next';
import * as express from 'express';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const { PORT } = process.env;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/user/confirm/:token', (req, res) => {
      const actualPage = '/';
      const queryParams = { token: req.params.token };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err: any) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost://${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
