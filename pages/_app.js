import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-0 -mt-4">

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
