import Head from 'next/head'
import Link from 'next/link'

function About() {
  return (
    <>
      <Head>
        <title>About | {process.env.SITE_NAME}</title>
      </Head>
      <Link href="/"><a>HOME</a></Link>
    </>
  )
}

export default About
