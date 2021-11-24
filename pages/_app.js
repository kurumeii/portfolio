import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Layout from '~/components/layout/layout'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
