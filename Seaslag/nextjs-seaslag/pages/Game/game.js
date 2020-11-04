import Head from 'next/head'
import Layout from '../../components/layout'
import GridComponent from '../../components/grid'

const amountOfPlayers = 4; 


export default function Game() {

  const players = ["Jaron", "Justin", "Tijn", "Luc"]
  var playerCounter = 0;
  
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Game</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={"gameview"}>
          {players.map(i => {
            playerCounter++;
            return (
              <section className={"player-screen " + "player-" + playerCounter}>
                <div className={"intro"}>
                  <h2>Username: {i}</h2>
                </div>
                
                <GridComponent />
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  )
}