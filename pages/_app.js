import React from 'react';
import App from 'next/app';
import { GlobalStyle } from './_globalStyle';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    );
  }
}
export default MyApp;
