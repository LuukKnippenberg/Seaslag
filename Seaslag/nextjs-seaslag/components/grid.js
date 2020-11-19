import Head from 'next/head'
import React from 'react'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const gridSizeHorizontal = 10;
const gridSizeVertical = 10;

class GridComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {grid: GenerateGrid(gridSizeHorizontal, gridSizeVertical )};
  }
  render(){
    return (
      <div>
         <div className="grid">
           {/* <div className="content" dangerouslySetInnerHTML={{__html: gridString}}></div> */}
   
           <div class="grid-container">
             {this.state.grid.map(item => {
              var selected = item.selected;
              if(item.selected)
              {
                var selectedClass = ""
              }
              else
              {

              }
              return (
                  <a  id={"x-" + item.x + " y-" + item.y + " id-" + item.id} className={"grid-item " + this.state.grid[item.id].hover} onMouseEnter={() => this.state.grid[item.id].hover = 1 + console.log(this.state.grid[item.id].hover)}></a>
              );
             })}
           </div>
   
         </div>
       </div>
     )
  }
}

export default GridComponent;

function GenerateGrid(horizontal, vertical){

  var tempGrid = [];

  for(var y = 0; y < vertical; y++)
  {
    for(var x = 0; x < horizontal; x++)
    {
      var gridItem = {id: parseInt("" + y + x), item: "test", x: x, y: y, selected: 0, hover: 0}
      tempGrid.push(gridItem)
    }
  }

  return tempGrid;
}

function GridItemClickEventHandler(item){
  item.selected = 1;
  console.log(item.id, item.selected)

  ToggleSelected()
}

function ToggleSelected(){

}