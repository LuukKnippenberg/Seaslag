import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Creategame.module.css'

export default function CreateGame() {

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Create Game</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div class="block">
            <form method="POST" id="createGameForm">
              <div class="content">
                <p className={`text-green ${styles.mt2} ${styles.textCenter}`}>
                  Amount of People: 4
              </p>
                <div class="container">
                  <div className={styles.row}>
                    <div className={styles.col}>
                      <label>
                        <input className={styles.mapSelector} type="radio" name="test" value="Siberia" />
                        <div className={`text-green black-outline ${styles.imageContainer} ${styles.Siberia} ${styles.textSmall} ${styles.textCenter}`}>Siberia</div>
                      </label>
                    </div>
                    <div className={styles.col}>
                      <label>
                        <input className={styles.mapSelector} type="radio" name="test" value="Hawaii" />
                        <div className={`text-green black-outline ${styles.imageContainer} ${styles.Hawaii} ${styles.textSmall} ${styles.textCenter}`}>Hawaii</div>
                        {/* <img src="/images/MapImages/Hawaii Sea.jpg" alt="Hawaii"></img> */}
                        {/* <p className={styles.TopCenter}>Hawaii</p> */}
                      </label>
                    </div>
                    <div className={styles.col}>
                      <label>
                        <input className={styles.mapSelector} type="radio" name="test" value="Omaha" />
                        <div className={`text-green black-outline ${styles.imageContainer} ${styles.Omaha} ${styles.textSmall} ${styles.textCenter}`}>Omaha Beach</div>
                      </label>
                    </div>
                  </div>
                </div>
                <a id="submitForm" className={`text-green ${styles.textCenter} ${styles.HoverBlack}`} onclick="document.getElementById('createGameForm').submit()">
                  Press Enter to submit
                </a>
              </div>
            </form>
          </div>
        </main>
      </div>
    </Layout>
  )
}

