import Head from 'next/head'
import Layout from '../../components/layout'
import GridComponent from '../../components/grid'
import { useState } from 'react';

const amountOfPlayers = 4;


export default function Game() {
  const players = ["Tijn", "Justin", "Luuk", "Luc"]
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
              <section key={playerCounter} className={"player-screen " + "player-" + playerCounter}>
                             
                <GridComponent players={players} playerId={i}/>
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  )
}