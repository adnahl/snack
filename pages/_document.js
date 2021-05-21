import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  // obtener props del lado del server
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

}

export default MyDocument