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
                
  
                <GridComponent />
              </section>
            );
          })}
        </div>
      </div>
    )
  
}