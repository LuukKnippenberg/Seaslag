import Head from 'next/head'
import Layout from '../../components/layout'

export default function Result() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Victory</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
         <div class="block">
           <form method = "POST" id = "Victory form">
           <div class="content">
           <p className={`text-green ${styles.mt2} ${styles.textCenter}`}>
                  Congratulations!!
              </p>


             </div>
           </form>
         </div>
        </main>
      </div>
    </Layout>
  )
}