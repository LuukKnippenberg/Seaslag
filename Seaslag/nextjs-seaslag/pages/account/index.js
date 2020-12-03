import Head from 'next/head'
import Layout from '../../components/layout'

export default function Account() {
  return (
    <Layout>
      <div className={"container"}>
        <Head>
          <title>Account</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className={"title"}>
            Account
          </h1>
          <ul>
            <li>Account: Boris</li>
            <li>Mail: boris@boris.com</li>
            <li>Beard State: Epic</li>
          </ul>
        </main>
      </div>
    </Layout>
  )
}