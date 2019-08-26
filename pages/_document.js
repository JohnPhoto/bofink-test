import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return {
      ...page,
      styleTags,
    };
  }

  render() {
    const { styleTags } = this.props;
    return (
      <html lang="sv">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
export default MyDocument;
