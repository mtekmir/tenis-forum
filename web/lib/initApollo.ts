import { ApolloClient, InMemoryCache, NormalizedCacheObject } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'
import { isBrowser } from './isBrowser'
import getConfig from 'next/config'
import { onError } from 'apollo-link-error'
import Router from 'next/router'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

if (!isBrowser) {
  ;(global as any).fetch = fetch
}

interface Options {
  getToken: () => string
}

function create(initialState: any, { getToken }: Options) {
  const httpLink = createHttpLink({
    uri: isBrowser ? publicRuntimeConfig.BACKEND_URL : serverRuntimeConfig.BACKEND_URL,
    credentials: 'include',
    headers: {},
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )

        if (isBrowser && message.includes('Unauthorized')) {
          Router.replace('/uyelik/giris')
        }
      })
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    return {
      headers: {
        ...headers,
        cookie: token ? `token=${token}` : '',
        'Access-Control-Allow-Origin': serverRuntimeConfig.BACKEND_URL,
      },
    }
  })

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default function initApollo(initialState: any, options: Options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
