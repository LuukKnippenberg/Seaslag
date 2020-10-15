import Head from 'next/head'
import Layout from '../../components/layout'

export default function Login() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Login
          </h1>
          <form>
            <input></input>
            <input></input>
            <input type="submit"></input>
          </form>
        </main>
      </div>
    </Layout>
  )
}