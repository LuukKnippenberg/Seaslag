import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Lobby.module.css'

export default function Lobby() {

  var UsedImage = 'url("/images/MapImages/Omaha Beach.jpg")'
  var Players = [
    "Danillo",
    "Luuk",
    "Jaron"
  ]
  var PlayerStatus = [
    true,
    false,
    true
  ]
  var LobbyCode = "A1B2"
  var IsHost = false;
  
  if(IsHost){
    var buttonText = "Start"
  } else {
    var buttonText = "Ready"
  }
  for(var i = 0; i < Players.length; i++){
    if(PlayerStatus[i]){
      Players[i] += "✔"
    } else {
      Players[i] += "❌"
    }
  }

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Lobby</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div class="block" >
            <div className={`content ${styles.height100}`} style={{position: "relative"}}>
              <div className={`${styles.textCenter}`}>
                <p>
                  Code: {LobbyCode}
                </p>
              </div>
              <div className={`${styles.row} text-green ${styles.textSmall}`}>
                <div style={{marginTop: 0}} className={`${styles.collg} ${styles.textLeft}`}>
                  Player 1: {Players[0]}
                  <br/>
                  Player 2: {Players[1]}
                  <br/>
                  Player 3: {Players[2]}
                  <br/>
                  Player 4: You
                </div>
                <div className={`${styles.colsm} ${styles.textCenter}`}>
                  <div style={{marginLeft: "auto", marginRight: 0, backgroundImage: UsedImage}} className={`black-outline ${styles.mapImg}`}> Map: Omaha</div>
                </div>
              </div>
              <div  className={`${styles.center} `}>
                <button style={{bottom: 25}} className={`${styles.button} ${styles.center} ${styles.posAbso}`}>
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}