import Head from 'next/head'
import Header from '../componets/Header'
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
        <Header />

        <Banner key="banner" />

        {/* Lista de videos */}
        <Explore vid={videos} CategoryName="My Snacks" key="ms" />
        <Explore vid={videos} CategoryName="New" key="ne" />

        {/* Lista de shows */}
        <Explore vid={videos} CategoryName="Premier" key="pr" />
        <Explore vid={videos} CategoryName="Popular" key="po" />

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