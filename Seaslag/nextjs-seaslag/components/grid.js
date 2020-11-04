import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const gridSizeHorizontal = 10;
const gridSizeVertical = 10;
const grid = GenerateGrid();

export default function GridComponent({  }) {
  return (
   <div>
     <div className="grid">
      <div className="content" dangerouslySetInnerHTML={{__html: grid}}></div>
     </div>
   </div>
  )
}

function GenerateGrid()
{
  var grid = "<div class='grid-container'>"
  var tempGrid;

  for(var x=0; x < gridSizeHorizontal; x++)
  {
    //X axis loop

    for(var y=0; y < gridSizeVertical; y++)
    {
      //Y axis loop
      tempGrid = grid.concat('<a href="#" id="x' + x + ' y' + y + '" class="grid-item" onclick={console.log(' + x + y +')}></a>');
      grid = tempGrid;
    }
  }

  tempGrid = grid.concat('</div>')
  grid = tempGrid;

  return grid;
}

function ConsoleLog()
{
    console.log("message")
}