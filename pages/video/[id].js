import Head from 'next/head'
import fetch from 'node-fetch'
import Header from '../../componets/Header'
import Image from 'next/image'

function PostVideo({ vid }) {
  return (
    <>
      <Head>
        <title> {vid.title} | {process.env.SITE_NAME}</title>
      </Head>

      <Header />

      <h1> vid </h1>

      <div>
        <Image
          key={`Cover-${vid.id}`}
          quality={50}
          src={`/images/${vid.coverImage}.jpg`}
          alt="Cover Image"
          width={910}
          height={512}
          className=" rounded-sm " />
      </div>

    </>
  )
}

PostVideo.getInitialProps = async function (ctx) {
  const { id } = ctx.query
  const res = await fetch(`${process.env.API_SNACK}/video/${id}`)
  const vid = await res.json()

  return {
    vid
  }
}

export default PostVideo