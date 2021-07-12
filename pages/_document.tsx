import Document, { Html, Head, Main, NextScript } from 'next/document'

class WebDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="N8aF7i2DswJjIfs6wdT7v-Q1iwzyCBemz5Ec9TDeaFw" />
        </Head>
        <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument