import Document, { Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

injectGlobal`
  p, div {
    font-family: 'Frank Ruhl Libre', serif;
  }
`;

export default class _Document extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    const { styleTags, title } = this.props;

    return (
      <html lang="en">
        <Head>
          {styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
