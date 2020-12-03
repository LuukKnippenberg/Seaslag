import dynamic from 'next/dynamic'
import Layout from '../../components/layout'
import React, { useState } from 'react';
import GameViewImport from './gameview'
import styles from '../../styles/joingame.module.css'
import axios from 'axios'
import Link from 'next/Link'
import Router from 'next/router'


var gameCode
var Username

var ref="/Game/lobby?token="

function JoinGame(GameCode) {
  const {} = Router
  axios.post('http://145.220.75.122/join-game', {
    "username": Username,
    "game_code": GameCode
  })
    .then(res => {
      console.log(`statusCode: ${res.data.token}`)
      console.log(res)
      ref += res.data.token
      console.log(ref)
      
      Router.push(ref+=res.data.token)
    })
  }

function HostGame() {
  const {} = Router
  axios.post('http://145.220.75.122/host-game', {
    "username": Username,
  })
    .then(res => {
      console.log(res.data.token)
      ref += res.data.token
      console.log(ref)
      Router.push(ref+=res.data.token)
    })
}


export default function Home() {

  function GameCodeChange(event) {
    gameCode = event.target.value
    console.log(gameCode)
  }

  function HandleNameChange(event) {
    Username = event.target.value
    console.log(Username)
  }


  const HostButton =
      <button style={{ marginRight: 15 }} className={styles.submitButton}
        onClick={() => {
          HostGame();
        }}
      >
        Host
      </button>

  const JoinButton =
      <button className={styles.submitButton}
        onClick={() => {
          JoinGame(gameCode);
        }}
      >
        Join
      </button>
  return (
    <Layout>
      <div className="container">
        <main>
          <div class="block">
            <div>
              <div className={styles.center}>
                <label name="Username" className={`text-green`}>
                  Username:
                </label>
                <input id="GameUsernameCode" style={{ width: 300, height: 61, fontSize: 32 }} onChange={(e) => HandleNameChange(e)} name="GameCode" className={`text-green ${styles.input} ${styles.textCenter}`}>
                </input>
              </div>
              <div className={styles.center}>
                <label name="GameCode" className={`text-green`}>
                  Game code:
                </label>
                <input id="GameCode" style={{ width: 160, height: 61, fontSize: 32 }} min="0" max="99999" defaultValue="" onChange={(e) => GameCodeChange(e)} type="number" name="GameCode" className={`text-green ${styles.input} ${styles.textCenter}`}>
                </input>
              </div>
              <div className={styles.center}>
                {HostButton} {JoinButton}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

