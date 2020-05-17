import { ApolloError } from 'apollo-server-core'

export const enum ErrorType {
  SERVER_ERROR = 'SERVER_ERROR',
}

export const reportErrors = (err: ApolloError) => {
  console.log(err)
}
