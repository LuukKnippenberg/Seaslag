import Head from 'next/head'
import Layout from '../../components/layout'

export default function Account() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Join Game</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Join Game
          </h1>
          
        </main>
      </div>
    </Layout>
  )
}