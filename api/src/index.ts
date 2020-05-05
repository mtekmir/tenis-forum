import 'reflect-metadata'
import { ApolloServer, ApolloError } from 'apollo-server-express'
import Express from 'express'
import dotenv from 'dotenv'

import { createDbConnection } from './utils/createDbConnection'
import { genSchema } from './schema'
import { routes } from './routes'
import { context } from './context'
import { middlewares } from './middlewares'
import { reportErrors } from './utils/errors'
import { corsOptions } from './options'

dotenv.config({ path: __dirname + '/../config/dev.env' })
const { PORT, CONN_TYPE } = process.env
;(async () => {
  await createDbConnection(CONN_TYPE)
})()

const server = new ApolloServer({
  schema: genSchema(),
  context,
  playground: true,
  formatError: (err: ApolloError) => {
    reportErrors(err)
    return err
  },
  debug: false,
})
const app = Express()
middlewares(app)

routes(app)

server.applyMiddleware({ app, path: '/', cors: corsOptions })

app.listen({ port: PORT }, () => console.log(`Server is running on port ${PORT}`))
