import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../lib/getPageContext';
import withApollo from '../lib/withApollo';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles/theme';
class MyApp extends App {
  pageContext: any;
  constructor() {
    // @ts-ignore
    super();
    this.pageContext = getPageContext();
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props as any;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <CssBaseline />
              <GlobalStyles />
              <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                <ThemeProvider theme={theme}>
                  <Component {...pageProps} />
                </ThemeProvider>
              </SnackbarProvider>
            </MuiThemeProvider>
          </JssProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
