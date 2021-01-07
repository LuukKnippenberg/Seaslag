import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Lobby.module.css'
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import jsCookie from 'js-cookie'

const socketIP = "ws://145.220.75.122"
const socket = io(socketIP)

var token = jsCookie.get('token')


socket.on('connect', function () {
  console.log('connected to socket!')
})
var players = []

function Lobby() {
  var playerIndex = -1;
  const [readyState, setReadyState] = useState("Ready")

  function emitReadyState(state) {
    socket.emit("ready",
      {
        "ready": state,
      })
  }

  function HandleReadyStateChange() {
    switch (readyState) {
      case "Ready":
        emitReadyState(true)
        setReadyState("Unready")
        break;
      case "Unready":
        emitReadyState(false)
        setReadyState("Ready")
        break;
        emitReadyState(true)
        setReadyState("Ready")
        break
    }
  }

  function Button() {
    return (
      <button style={{ bottom: 25 }} className={`${styles.button} ${styles.center} ${styles.posAbso}`} onClick={() => HandleReadyStateChange()}>
        {readyState}
      </button>
    )
  }
  token = jsCookie.get('token')

  const [player1, setPlayer1] = useState({
    "name": "",
    "ready": ""
  })
  const [player2, setPlayer2] = useState({
    "name": "",
    "ready": ""
  })
  const [player3, setPlayer3] = useState({
    "name": "",
    "ready": ""
  })
  const [player4, setPlayer4] = useState({
    "name": "",
    "ready": ""
  })

  const [GameData, setGameData] = useState({
    players: [],
    game_code: "",
    self_index: -1,
  })

  useEffect(() => {
    socket.on("player_ready", data => {
      switch (data.index) {
        case 0:
          var playerData = player1
          playerData.ready = data.ready.toString()
          setPlayer1(playerData)
          break;
        case 1:
          var playerData = player2
          playerData.ready = data.ready.toString()
          setPlayer2(playerData)
          break;
        case 2:
          var playerData = player3
          playerData.ready = data.ready.toString()
          setPlayer3(playerData)
          break;
        case 3:
          var playerData = player4
          playerData.ready = data.ready.toString()
          setPlayer4(playerData)
          break;
      }
    })
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
      playerIndex = data.self_index
      for (var i = 0; i < data.players.length; i++) {
        var playerData = {
          "name" : data.players[i].name,
          "ready": data.players[i].ready.toString()
        }
        switch (i) {
          case 0:
            setPlayer1(playerData)
            break;
          case 1:
            setPlayer2(playerData)
            break;
          case 2:
            setPlayer3(playerData)
            break;
          case 3:
            setPlayer4(playerData)
            break;
        }
      }
    })
  })
  useEffect(() => {
    socket.on("player_joined", data => {
      switch (data.index) {
        case 0:
          setPlayer1(data)
          break;
        case 1:
          setPlayer2(data)
          break;
        case 2:
          setPlayer3(data)
          break;
        case 3:
          setPlayer4(data)
          break;
      }
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
              <div className={`${styles.textCenter} text-green ${styles.textSmall}`}>
                <div style={{ marginTop: 0 }}>
                  <div className={styles.row}>
                    <div className={styles.col}>
                      <div>{player1.name}</div><br />
                      <div>{player2.name}</div><br />
                      <div>{player3.name}</div><br />
                      <div>{player4.name}</div><br />
                    </div>
                    <div className={styles.col}>
                      <div>{player1.ready}</div><br />
                      <div>{player2.ready}</div><br />
                      <div>{player3.ready}</div><br />
                      <div>{player4.ready}</div><br />
                    </div>
                  </div>
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