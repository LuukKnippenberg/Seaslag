import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
-      <section className={utilStyles.headingMd}>
        <div class="block">
          <div class="content">
            <p>Username: Lorem Ipsum</p>
            <p>Password: ********</p>
            <p>Press enter to submit</p>
          </div>
          <Link href="/Game/game"><a>klik hier plz</a></Link>
          <Link href="/Game/result"><a>Temp for testing</a></Link>
        </div>
      </section>
    </Layout>
  )
}