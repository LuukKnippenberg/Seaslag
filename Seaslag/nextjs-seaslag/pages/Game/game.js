import Head from 'next/head'
import Layout from '../../components/layout'
import GridComponent from '../../components/grid'

const amountOfPlayers = 4; 


export default function Game() {

  const players = ["Jaron"]
  var playerCounter = 0;
  
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Game</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={"main main-game"}>
          <h1 className="title">
            Game
          </h1>
          <div className={"gameview"}>
            {players.map(i => {
              playerCounter++;
              return (
                <section className={"player-screen " + "player-" + playerCounter}>
                  <h2>{i}</h2>
                  <GridComponent />
                </section>
              );
              
            })}
          </div>
        </main>
      </div>
    </Layout>
  )
}