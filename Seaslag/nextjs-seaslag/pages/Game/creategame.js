import Head from 'next/head'
import Layout from '../../components/layout'

export default function CreateGame() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Create Game</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Create Game
          </h1>
        </main>
      </div>
    </Layout>
  )
}