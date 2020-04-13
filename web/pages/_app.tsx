import App from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../lib/withApollo'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { theme, GlobalStyles } from '../styles/theme'
import { UserContextProvider } from '../context/userContext'
class MyApp extends App {
  pageContext: any

  render() {
    const { Component, pageProps, apolloClient } = this.props as any
    return (
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
          <UserContextProvider>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </UserContextProvider>
        </ApolloHooksProvider>
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
