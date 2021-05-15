import Head from 'next/head'
import Header from '../componets/Header'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Snack</title>
        <meta name="description" content="Let´s snack baby!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />






    </div>
  )
}
