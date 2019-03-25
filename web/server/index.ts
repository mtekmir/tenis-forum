import * as next from 'next';
import * as express from 'express';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = 4000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/uyelik/dogrulama/:token', (req, res) => {
      const actualPage = '/uyelik/dogrula';
      const queryParams = { token: req.params.token };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/uyelik/yeni-sifre/:token', (req, res) => {
      const actualPage = '/uyelik/yeni-sifre';
      const queryParams = { token: req.params.token };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/forum/:id', (req, res) => {
      const queryParams = { id: req.params.id };
      app.render(req, res, '/forum', queryParams);
    });

    server.get('/thread/:id', (req, res) => {
      const queryParams = { id: req.params.id };
      app.render(req, res, '/thread', queryParams);
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
