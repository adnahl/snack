import Head from 'next/head'
import Banner from '../componets/Banner'
import Header from '../componets/Header'
import Explore from '../componets/Explore'

import Card from '../componets/Card'


export default function Home() {
  return (
    <div className="bg-blue-0 -mt-4">
      <Head>
        <title>Snack</title>
        <meta name="description" content="Let´s snack baby!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Explore />



    </div>
  )
}
