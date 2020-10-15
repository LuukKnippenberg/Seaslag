import Head from 'next/head'
import Layout from '../../components/layout'

export default function Game() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Game</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Game
          </h1>
        </main>
      </div>
    </Layout>
  )
}