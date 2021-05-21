import Head from 'next/head'
import Banner from '../componets/Banner'
import Explore from '../componets/Explore'
import fetch from 'node-fetch'

export default function Home({ videos }) {
  return (
    <>
      <Head>
        <title>{process.env.SITE_NAME}</title>
        <meta name="description" content="Let´s snack baby!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />

        {/* Lista de videos */}
        <Explore vid={videos} type="ms" CategoryName="My Snacks" />
        <Explore vid={videos} type="ne" CategoryName="New" />

        {/* Lista de shows */}
        <Explore vid={videos} type="pr" CategoryName="Premier" />
        <Explore vid={videos} type="po" CategoryName="Popular" />

        {/* Lista de perfiles */}

      </main>
    </>
  )
}


export async function getStaticProps() {
  const res = await fetch(`${process.env.API_SNACK}/videos`)
  const videos = await res.json()

  return {
    props: { videos },
  }

}