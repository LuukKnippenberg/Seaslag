import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Lobby.module.css'
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import jsCookie from 'js-cookie'

const socketIP = "ws://145.220.75.122"
const socket = io(socketIP)

var token = jsCookie.get('token')

var UsedImage = 'url("/images/MapImages/Omaha Beach.jpg")'

function Button() {
  return (
    <button style={{ bottom: 25 }} className={`${styles.button} ${styles.center} ${styles.posAbso}`}>
      Ready
    </button>
  )
}
socket.on('connect', function () {
  console.log('connected to socket!')
})
var players = []

function Lobby() {
  token = jsCookie.get('token')

  const [playerDiv, setPlayerDiv] = useState(<div></div>)

  function changePlayers(playersArray) {
    switch (playersArray.length) {
      case 0:
        setPlayerDiv(<div>
        </div>)
        break;
      case 1:
        setPlayerDiv(<div>
          <div>Player 1: {playersArray[0].name}</div>
        </div>)
        break;
      case 2:
        setPlayerDiv(<div>
          <div>Player 1: {playersArray[0].name}</div>
          <div>Player 2: {playersArray[1].name}</div>
        </div>)
        break;
      case 3:
        setPlayerDiv(<div>
          <div>Player 1: {playersArray[0].name}</div>
          <div>Player 2: {playersArray[1].name}</div>
          <div>Player 3: {playersArray[2].name}</div>
        </div>)
        break;
      case 4:
        setPlayerDiv(<div>
          <div>Player 1: {playersArray[0].name}</div>
          <div>Player 2: {playersArray[1].name}</div>
          <div>Player 3: {playersArray[2].name}</div>
          <div>Player 4: {playersArray[3].name}</div>
        </div>)
        break;
    }
  }

  const [GameData, setGameData] = useState({
    players: [],
    game_code: "",
    self_index: - 1,
  })
  useEffect(() => {
    socket.emit('token', token)
    return () => {
    }
  })
  useEffect(() => {
    socket.on("game_info", data => {
      console.log('game info obtained')
      setGameData(data)
      players = data.players
      changePlayers(players)
    })
  })
  useEffect(() =>{
    socket.on("player_joined", data =>{
      for(var i =0; i < players.length; i++){
        if(players[i] == data){
          return;
        }
      }
      players.push(data)
      changePlayers(players)
    })
  })

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Lobby</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div class="block" >
            <div className={`content ${styles.height100}`} style={{ position: "relative" }}>
              <div className={`${styles.textCenter}`}>
                <p>
                  Code: {GameData.game_code}
                </p>
              </div>
              <div className={`${styles.row} text-green ${styles.textSmall}`}>
                <div style={{ marginTop: 0 }} className={`${styles.collg} ${styles.textLeft}`}>
                  {playerDiv}
                </div>
                <div className={`${styles.colsm} ${styles.textCenter}`}>
                  {/* <div style={{ marginLeft: "auto", marginRight: 0, backgroundImage: UsedImage }} className={`black-outline ${styles.mapImg}`}> Map: Omaha</div> */}
                </div>
              </div>
              <div className={`${styles.center} `}>
                <Button>

                </Button>

              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Lobby