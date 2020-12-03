import Head from 'next/head'
import React, { setState } from 'react'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const gridSizeHorizontal = 10;
const gridSizeVertical = 10;

class GridComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: GenerateGrid(gridSizeHorizontal, gridSizeVertical )
    };
  }
  render(){
    return (
      <div>
         <div className={"grid"}>
   
           <div className={"grid-container"}>
             {this.state.grid.map(item => {

              var selected = ReturnBoolState(this.state.grid[item.id].selected, "selected");
              var hover = ReturnBoolState(this.state.grid[item.id].hover, "hover");

              return (
                  <a  key={this.state.grid[item.id].id} 
                      id={"x-" + item.x + " y-" + item.y + " id-" + item.id} 
                      className={"grid-item " + this.state.grid[item.id].id + " " + selected} 
                      onMouseEnter={() => this.state.grid[item.id].hover = 1 + console.log(this.state.grid[item.id].id)}
                      onClick={() => this.setState({grid: ToggleSelected(this.state.grid, item)})}>
                  </a>
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
      var gridItem = {id: parseInt("" + y + x), item: "test", x: x, y: y, selected: false, hover: 0}
      tempGrid.push(gridItem)
    }
  }

  return tempGrid;
}

function ToggleSelected(grid, item)
{

  grid.forEach(function(item)
  {
    item.selected = false;
  });

  if(item.selected == true)
  {
    grid[item.id].selected = false;
    return grid;
  }
  else
  {
    grid[item.id].selected = true;
    return grid;
  }

}

function ReturnBoolState(selectionState, message){
  if(selectionState)
  {
    return message;
  }
  else
  {
    return "";
  }
}