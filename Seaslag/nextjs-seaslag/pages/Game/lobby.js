import Head from 'next/head'
import Layout from '../../components/layout'

export default function Lobby() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Lobby</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Lobby
          </h1>
          
        </main>
      </div>
    </Layout>
  )
}