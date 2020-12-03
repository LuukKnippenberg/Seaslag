import Head from 'next/head'
import Layout from '../../components/layout'

export default function Login() {
  return (
    <Layout login>
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
        </div>    
      </section>
    </Layout>
  )
}