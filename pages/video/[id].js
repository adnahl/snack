/*import Head from 'next/head'
import fetch from 'node-fetch'

function PostVideo({ vid }) {
  return (
    <>

      <Head>
        <title> {vid.title} | {process.env.SITE_NAME}</title>
      </Head>

    </>
  )
}

PostVideo.getInitialProps = async function (ctx) {

  const { id } = ctx.query
  const res = await fetch(`${process.env.API_SNACK}/videos/${id}`)
  const vid = await res.json()

  return {
    vid
  }
}

export default PostVideo
*/