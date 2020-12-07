import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Account</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className={utilStyles.headingMd}>
          <div class="block home">
          <div class="content">
            <div class="row">
              <div class="col">
                <Link href="/Game/joingame"><a className={"button bordered"}>Join Game</a></Link>
              </div>
              <div class ="col">
                <Link href="/Game/creategame"><a className={"button bordered"}>create Game</a></Link>
              </div>
            </div>
          </div>         
         </div>    
        </section>
      </div>
    </Layout>
  )
}