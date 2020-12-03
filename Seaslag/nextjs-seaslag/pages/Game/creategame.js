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
                <div>
                  <label className={`text-green`} name="AmountOfPlayers"> Amount of players: </label>
                  <input className={`text-green ${styles.inputNumber} ${styles.textCenter}`} type="number" name="AmountOfPlayers" min='2' max='4' defaultValue="2"></input>
                </div>
                <div class="container">
                  <div className={styles.row}>
                    <div className={styles.col}>
                      <label>
                        <input className={styles.mapSelector} type="radio" name="Map" value="Siberia" defaultChecked />
                        <div className={`text-green black-outline ${styles.imageContainer} ${styles.Siberia} ${styles.textSmall} ${styles.textCenter}`}>Siberia</div>
                      </label>
                    </div>
                    <div className={styles.col}>
                      <label>
                        <input className={styles.mapSelector} type="radio" name="Map" value="Hawaii" />
                        <div className={`text-green black-outline ${styles.imageContainer} ${styles.Hawaii} ${styles.textSmall} ${styles.textCenter}`}>Hawaii</div>
                      </label>
                    </div>
                    <div className={styles.col}>
                      <label>
                        <input className={styles.mapSelector} type="radio" name="Map" value="Omaha" />
                        <div className={`text-green black-outline ${styles.imageContainer} ${styles.Omaha} ${styles.textSmall} ${styles.textCenter}`}>Omaha Beach</div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={`${styles.center} ${styles.pt3}`}>
                  <input className={`${styles.submitButton}`} type="submit" value="Press Enter to submit"></input>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </Layout>
  )
}

