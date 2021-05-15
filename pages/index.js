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

      {/*putillo css*/}



      <Header />


      {/*

      <div class="mt-1 pt-4 relative max-w-full sm:max-w-max mr-8">
        <input
          class="w-full border-2 border-white bg-[#130282] h-10 ml-4 px-4 pr-32 rounded text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />

        <button type="submit" class="absolute right-0 top-0 mt-5 mr-3">
          <SearchIcon className="h-8" />
        </button>
      </div>

*/}



    </div>
  )
}
