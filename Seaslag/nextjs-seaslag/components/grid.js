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
      grid: GenerateGrid(gridSizeHorizontal, gridSizeVertical ),
      ships: [
        {id: 0, hitpoints: 2, damage: [0, 2], coordinates: []},
        {id: 1, hitpoints: 3, damage: [0, 1], coordinates: []},
        {id: 2, hitpoints: 3, damage: [0, 1], coordinates: []},
        {id: 3, hitpoints: 4, damage: [0, 1], coordinates: []},
        {id: 4, hitpoints: 4, damage: [0, 1], coordinates: []},
        {id: 5, hitpoints: 5, damage: []}
      ],
      selectedShip: 0
    };
  }
  render(){
    return (
      <div>
          <div className={"intro"}>
            <h2>Username: {this.props.playerId}</h2>
            <section className={"options"}>

              {this.state.ships.map(item => { 

                return(
                  <a onClick={() => this.state.selectedShip = item.id} href={"#"}>{item.hitpoints}</a>
                );
                
              })}
            </section>
          </div>

         <div className={"grid"}>
           <div className={"grid-container"}>
             {this.state.grid.map(item => {

              var selectedShip = this.state.ships[this.state.selectedShip];
              var selected = ReturnBoolState(this.state.grid[item.id].selected, "selected");
              var hover = ReturnBoolState(this.state.grid[item.id].hover, "preview");

              return (
                  <a  key={this.state.grid[item.id].id} 
                      id={"x-" + item.x + " y-" + item.y + " id-" + item.id} 
                      className={"grid-item " + this.state.grid[item.id].id + " " + selected + " " + hover} 
                      onMouseEnter={() => this.setState({grid: ToggleHover(this.state.grid, item, selectedShip.hitpoints)})}
                      onClick={() => this.setState({grid: ToggleSelected(this.state.grid, item, selectedShip.hitpoints)})}>
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

function ToggleSelected(grid, item, size)
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
    for(var i = 0; i < size; i++)
    {
      var index = item.id + i;
      if(IfExists(grid[index]))
      {
        grid[index].selected = true;
      }
    }

    grid[item.id].selected = true;
    return grid;
  }

}


function ToggleHover(grid, item, size)
{

  grid.forEach(function(item)
  {
    item.hover = false;
  });

  for(var i = 0; i < size; i++)
  {
    var index = item.id + i;
    if(IfExists(grid[index]))
    {
      grid[index].hover = true;
    }
  }

  grid[item.id].hover = true;
  return grid;

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

function IfExists(item){
  if(item)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function SelectBoat(size){
  alert('Boat size: ' + size);
}