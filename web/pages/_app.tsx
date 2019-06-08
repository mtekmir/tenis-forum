import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/withApollo';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles/theme';
import { MeComponent } from '../generated/apolloComponents';
import { UserContextProvider } from '../context/userContext';
class MyApp extends App {
  pageContext: any;

  render() {
    const { Component, pageProps, apolloClient } = this.props as any;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <MeComponent>
            {({ data }) => (
              <UserContextProvider value={{ user: data && data.me }}>
                <GlobalStyles />
                <ThemeProvider theme={theme}>
                  <Component {...pageProps} />
                </ThemeProvider>
              </UserContextProvider>
            )}
          </MeComponent>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
