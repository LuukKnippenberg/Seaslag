import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Lobby.module.css'
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import jsCookie from 'js-cookie'
import Game from './game';
import GridComponent from '../../components/grid';
import gameview from './gameview';
import Router from 'next/router'

const socketIP = "ws://178.62.244.31:5050"
const socket = io(socketIP)


var token = jsCookie.get('token')


socket.on('connect', function () {
  console.log('connected to socket!')
})

var self_index = -1;

function ShowBoats(){
  Router.push("/Game/game")
}

function Lobby() {
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
      default:
        emitReadyState(true)
        setReadyState("Ready")
        break
    }
  }

  function Button() {
    if(self_index ==0){
      return (
        <button style={{ bottom: 25 }} className={`${styles.button} ${styles.center} ${styles.posAbso}`} onClick={() => ShowBoats()}>
          {readyState}
        </button>
      )
    }
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
      self_index = data.self_index;
      console.log('game info obtained')
      setGameData(data)
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
      var playerData = {
        "name" : data.name,
        "ready": "false"
      }
      switch (data.index) {
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
    })
  })
  useEffect(() =>{
    socket.on("game_start", () =>{
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
                    <ul className={styles.col}>
                      <li>{player1.name}</li>
                      <li>{player2.name}</li>
                      <li>{player3.name}</li>
                      <li>{player4.name}</li>
                    </ul>
                    <ul className={styles.col}>
                      <li>{player1.ready}</li>
                      <li>{player2.ready}</li>
                      <li>{player3.ready}</li>
                      <li>{player4.ready}</li>
                    </ul>
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