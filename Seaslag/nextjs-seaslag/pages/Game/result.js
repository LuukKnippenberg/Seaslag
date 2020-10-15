import Head from 'next/head'
import Layout from '../../components/layout'

export default function Result() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Result</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Results
          </h1>
          <p>Gewonnen lekker bezig hoor.</p>
        </main>
      </div>
    </Layout>
  )
}