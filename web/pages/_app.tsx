import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import JssProvider from "react-jss/lib/JssProvider";
import getPageContext from "../lib/getPageContext";
import withApollo from "../lib/withApollo";

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
            {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />

              <Component {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
