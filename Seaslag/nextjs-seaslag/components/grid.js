import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const gridSizeHorizontal = 10;
const gridSizeVertical = 10;
const grid = GenerateGrid(gridSizeHorizontal, gridSizeVertical );

export default function GridComponent({  }) {
  return (
   <div>
      <div className="grid">
        {/* <div className="content" dangerouslySetInnerHTML={{__html: gridString}}></div> */}

        <div class="grid-container">
          {grid.map(item => {
            return (
                <a  id={"x-" + item.x + " y-" + item.y + " id-" + item.id} class="grid-item" onClick={() => console.log(item.id)}></a>
            );
          })}
        </div>

      </div>
    </div>
  )
}

function GenerateGrid(horizontal, vertical){

  var tempGrid = [];
  

  for(var y = 0; y < vertical; y++)
  {
    for(var x = 0; x < horizontal; x++)
    {
      var gridItem = {id: "" + y + x, item: "test", x: x, y: y}
      tempGrid.push(gridItem)
    }
  }

  return tempGrid;
}