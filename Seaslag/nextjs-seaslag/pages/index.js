import Layout from '../components/layout.js'
import React from 'react';
import styles from '../styles/joingame.module.css'
import Router from 'next/router'
import jsCookie from 'js-cookie'

if (jsCookie.get('token') != null) {
  jsCookie.remove('token')
}

var gameCode
var Username

function JoinGame() {
  var axios = require('axios');
  var data = JSON.stringify({ "username": Username.toString(), "game_code": gameCode.toString() });

  var config = {
    method: 'post',
    url: 'http://145.220.75.122/join-game',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      console.log(response.data.token);
      jsCookie.set('token', response.data.token)
      redirectToLobby()
    })
    .catch(function (error) {
      console.log(error);
    });
}

function HostGame() {
  var axios = require('axios');
  axios.post('http://145.220.75.122/host-game', {
    "username": Username,
  })
    .then(res => {
      jsCookie.set('token', res.data.token)
      console.log(res.data.token)
      redirectToLobby()
    })
}

function redirectToLobby() {
  Router.push("/Game/lobby")
}


export default function home() {
  jsCookie.remove('token')

  function GameCodeChange(event) {
    gameCode = event.target.value
  }

  function HandleNameChange(event) {
    Username = event.target.value
  }

  const HostButton =
    <button style={{ marginRight: 15 }} className={styles.submitButton} onClick={() => { HostGame() }}>
      Host
      </button>

  const JoinButton =
    <button className={styles.submitButton} onClick={() => { JoinGame(); }}>
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

