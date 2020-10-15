import Head from 'next/head'
import Layout from '../../components/layout'

export default function Register() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Register</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            Register
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