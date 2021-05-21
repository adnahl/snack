import '../styles/globals.css'
import Header from '../componets/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-0 -mt-4">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
