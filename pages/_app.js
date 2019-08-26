import React from 'react';
import App, { Container } from 'next/app';
import { GlobalStyle } from './_globalStyle';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
        <GlobalStyle />
      </Container>
    );
  }
}
export default MyApp;
