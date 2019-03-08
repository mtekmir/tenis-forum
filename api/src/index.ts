import 'reflect-metadata';
import { ApolloServer, ApolloError } from 'apollo-server-express';
import Express from 'express';
import { createDbConnection } from './utils/createDbConnection';
import { genSchema } from './schema';
import { routes } from './routes';
import { context } from './context';
import { middlewares } from './middlewares';
import { reportErrors, ErrorType } from './utils/errors';
import { corsOptions } from './options';
const { PORT, CONN_TYPE } = process.env;

(async () => {
  await createDbConnection(CONN_TYPE);
})();

const server = new ApolloServer({
  schema: genSchema(),
  context,
  playground: true,
  formatError: (err: ApolloError) => {
    reportErrors(err);
    return {
      message: ErrorType.SERVER_ERROR,
      code: ErrorType.SERVER_ERROR,
      locations: err.locations,
      path: err.path,
    };
  },
});
const app = Express();
middlewares(app);

routes(app);

server.applyMiddleware({ app, path: '/', cors: corsOptions });

app.listen({ port: PORT }, () =>
  console.log(`Server is running on port ${PORT}`),
);
