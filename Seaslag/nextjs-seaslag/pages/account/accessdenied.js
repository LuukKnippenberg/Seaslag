import Head from 'next/head'
import Layout from '../../components/layout'

export default function Accessdenied() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Access Denied</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Access Denied
          </h1>
        </main>
      </div>
    </Layout>
  )
}