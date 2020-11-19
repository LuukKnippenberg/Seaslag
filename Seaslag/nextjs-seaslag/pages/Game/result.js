import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Creategame.module.css'

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
            <form method="POST" id="resultForm">
              <div class="content">
                <p className={`text-green ${styles.mt2} ${styles.textCenter}`}>
                  Victory
              </p> 
              <p className={`text-green ${styles.mt2} ${styles.textCenter}`}>
                  Return to home screen
              </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </Layout>
  )
}