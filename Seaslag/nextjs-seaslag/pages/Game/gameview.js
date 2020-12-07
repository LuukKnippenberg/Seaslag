import Head from 'next/head'
import Layout from '../../components/layout'
import GridComponent from '../../components/grid'
import { useState } from 'react';


function SelectBoat(size) {
    alert('Boat size: ' + size);
  }
export default function GameView(){
    const players = ["Jaron", "Justin", "Tijn", "Luc"]
    var playerCounter = 0;
  
    const selectedBoat = useState(true);
    
    return (
      <div className="container">
        <div className={"gameview"}>
          {players.map(i => {
            playerCounter++;
            return (
              <section className={"player-screen " + "player-" + playerCounter}>
                <div className={"intro"}>
                  <h2>Username: {i}</h2>
                  <section className={"options"}>
                    <a onClick={() => SelectBoat(2)} href={"#"}>2</a>
                    <a onClick={() => SelectBoat(3)} href={"#"}>3</a>
                    <a onClick={() => SelectBoat(4)} href={"#"}>4</a>
                    <a onClick={() => SelectBoat(6)} href={"#"}>6</a>
                  </section>
                </div>
  
                <GridComponent />
              </section>
            );
          })}
        </div>
      </div>
    )
  
}