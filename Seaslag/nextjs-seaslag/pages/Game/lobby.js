import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Lobby.module.css'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import io from 'socket.io-client';

const socketIP = "ws://145.220.75.122"
const socket = io(socketIP)


var UsedImage = 'url("/images/MapImages/Omaha Beach.jpg")'
var Players = [
  "Danillo",
  "Luuk",
  "Jaron"
]
var PlayerStatus = [
  false,
  true,
  true
]
var LobbyCode = "A1B2"
var IsHost = true;

for (var i = 0; i < Players.length; i++) {
  if (PlayerStatus[i]) {
    Players[i] += " ✔"
  } else {
    Players[i] += " ❌"
  }
}

var allReady = false
function checkFalse(boolean) {
  return boolean == false;
}

if (PlayerStatus.find(checkFalse) == false) {
  allReady = false
} else {
  allReady = true;
}

function Button() {
  if (IsHost) {
    if (allReady) {
      return (
        <button style={{ bottom: 25 }} className={`${styles.button} ${styles.center} ${styles.posAbso}`}>
          Start
        </button>
      )
    } else {
      return (
        <button disabled style={{ bottom: 25 }} className={`${styles.button} ${styles.center} ${styles.posAbso}`}>
          Start
        </button>
      )
    }
  } else {
    return (
      <button style={{ bottom: 25 }} className={`${styles.button} ${styles.center} ${styles.posAbso}`}>
        Ready
      </button>
    )
  }
}
var token


function Lobby() {
  const [Users = setUsers] = useState(["", "", ""])

  const router = useRouter()
  const token = router.query.token
  socket.on('connect', function (){
    console.log('connected')
    console.log(socket.id)
    console.log(socket.emit("token", token));
    console.log(socket.on("game_info", function(data) {
      console.log(data)
    }));
  })
  // useEffect(() => {
  //   console.log(socket.emit("token", token));
  //   console.log(socket.id)
  //   console.log(socket.on("game_info", function(data) {
  //     console.log(data)
  //   }));
  // });
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
                  Code: {LobbyCode}
                </p>
              </div>
              <div className={`${styles.row} text-green ${styles.textSmall}`}>
                <div style={{ marginTop: 0 }} className={`${styles.collg} ${styles.textLeft}`}>
                  Player 1: {Users[0]}
                  <br />
                  Player 2: {Users[1]}
                  <br />
                  Player 3: {Users[2]}
                  <br />
                  Player 4: You
                </div>
                <div className={`${styles.colsm} ${styles.textCenter}`}>
                  <div style={{ marginLeft: "auto", marginRight: 0, backgroundImage: UsedImage }} className={`black-outline ${styles.mapImg}`}> Map: Omaha</div>
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