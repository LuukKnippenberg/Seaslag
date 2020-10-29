import Head from 'next/head'
import Layout from '../../components/layout'
import GridComponent from '../../components/grid'

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
          <div>
            gridjee
            <GridComponent />
          </div>
        </main>
      </div>
    </Layout>
  )
}