import Head from 'next/head'
import React, { setState, useState } from 'react'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const gridSizeHorizontal = 10;
const gridSizeVertical = 10;
class ship{
  constructor(Id,Hitpoints,Damage,Coordinates,IsHorizontal,Placed){
    this.state = {
      id : Id,
      hitpoints: Hitpoints,
      damage: Damage,
      coordinates: Coordinates,
      isHorizontal: IsHorizontal,
      placed: Placed
    }
  }
}

class GridComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: GenerateGrid(gridSizeHorizontal, gridSizeVertical),
      ships: [
        new ship(0,2,[0,2],[],false,false),
        new ship(1,2,[0,2],[],false,false),
        new ship(2,2,[0,2],[],false,false),
        new ship(3,2,[0,2],[],false,false),
        new ship(4,3,[0,2],[],false,false),
        new ship(5,3,[0,2],[],false,false),
        new ship(6,3,[0,2],[],false,false),
        new ship(7,4,[0,2],[],false,false),
        new ship(8,4,[0,2],[],false,false),
        new ship(9,5,[0,2],[],false,false)
      ],
      selectedShip: 0,
      placedAll: false,
      placementLocked: false,
      placementText: "Lock Placement"
    };
  }
  render() {
    return (
      <div>
        <div className={"intro"}>
          <h2>Username: {this.props.playerId}</h2>
          <section className={"options"}>
            {this.state.ships.map(item => {
              return (
                <a onClick={() => this.state.selectedShip = item.state.id} id={"ship selector " + item.state.id} href={"#"}>{item.state.hitpoints}</a>
              );
            })}
          </section>
          <button className={"button"} onClick={()=> rotateShip(this.state.ships[this.state.selectedShip])}>rotate</button>
          
          <button className={"button"} style={{float:'right'}} disabled={!this.state.placedAll || this.state.placementLocked}
          onClick={() => {this.setState({placementLocked: lockPlacement(this.state.placedAll)});
                          this.state.placementText ="Placement Locked"} }
          >{this.state.placementText}</button>
        </div>

        <div className={"grid"}>
          <div className={"grid-container"}>
            {this.state.grid.map(item => {

              var selectedShip = this.state.ships[this.state.selectedShip];
              var cssClasses = ReturnCSS(this.state.grid[item.id])
              var selected = ReturnBoolState(this.state.grid[item.id].selected, "selected");
              var hover = ReturnBoolState(this.state.grid[item.id].hover, "preview");
              var blocked = ReturnBoolState(this.state.grid[item.id].blocked, "blocked");
              return (
                <a key={this.state.grid[item.id].id}
                  id={"x-" + item.x + " y-" + item.y + " id-" + item.id}
                  className={"grid-item " + this.state.grid[item.id].id + " " + cssClasses/* selected + " " + hover + " " + blocked */}
                  onMouseEnter={() => this.setState({ grid: ToggleHover(this.state.grid, item, selectedShip.state.hitpoints, selectedShip.state.isHorizontal) })}
                  onClick={() => {
                    this.setState({ grid: ToggleSelected(this.state.grid, item, selectedShip.state.hitpoints, selectedShip.state) })
                    DrawGrid(this.state.grid, this.state.ships);
                    this.state.placedAll = testAllPlaced(this.state.ships)
                  }}>
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

function lockPlacement(placedAll){
  if(placedAll){
    return true
  }
  return false
}

function testAllPlaced(ships){
  var allPlaced = true
  ships.forEach(function(ship){
    if(!ship.state.placed){
      allPlaced = false;
    }else {
      var element = document.getElementById("ship selector "+ship.state.id)
      element.classList.add("text-red")
    }
  })
  return allPlaced
}

function GenerateGrid(horizontal, vertical) {

  var tempGrid = [];

  for (var y = 0; y < vertical; y++) {
    for (var x = 0; x < horizontal; x++) {
      var gridItem = { id: parseInt("" + y + x), item: "test", coordinate: { "x": x, "y": y }, selected: false, hover: 0, blocked: false }
      tempGrid.push(gridItem)
    }
  }

  return tempGrid;
}

function rotateShip(ship){
  ship.state.isHorizontal = !ship.state.isHorizontal
}

function ToggleSelected(grid, item, size, ship) {

  var placeble = true;
  for (var i = 0; i < ship.hitpoints; i++) {
    switch (!ship.isHorizontal) {
      case true:
        var square = grid.find(function (gridSquare) {
          return (gridSquare.coordinate.x == item.coordinate.x && gridSquare.coordinate.y == (item.coordinate.y + i))
        })
        if (square != undefined) {
          if (square.blocked) {
            placeble = false;
          }
        }
        break;
      case false:
        var square = grid.find(function (gridSquare) { return (gridSquare.coordinate.x == item.coordinate.x + i && gridSquare.coordinate.y == item.coordinate.y) })
        if (square != undefined) {
          if (square.blocked) {
            placeble = false;
          }
        } else {
          placeble = false;
        }
        break;
    }
    if (!placeble) {
      break;
    }
  }

  if (placeble) {
    ship.coordinates = [item.coordinate.x, item.coordinate.y]
    ship.placed = true
  }

  if (item.selected == true) {
    grid[item.id].selected = false;
    return grid;
  }
  else {
    for (var i = 0; i < size; i++) {
      var index = item.id + i;
      if (IfExists(grid[index])) {
        grid[index].selected = true;
      }
    }

    grid[item.id].selected = true;
    return grid;
  }
}

function setBlocked(grid, ships) {
  grid.forEach(function (gridSquare) {
    gridSquare.blocked = false
  })

  ships.forEach(function (ship) {
    console.log(ship)
    for (var i = -1; i < ship.state.hitpoints + 1; i++) {
      for (var j = -1; j <= 1; j++) {
        switch (!ship.state.isHorizontal) {
          case true:
            var square = grid.find(function (gridSquare) { return (gridSquare.coordinate.x == ship.state.coordinates[0] + j && gridSquare.coordinate.y == ship.state.coordinates[1] + i) })
            if (square != undefined) {
              square.blocked = true
            }
            break;
          case false:
            var square = grid.find(function (gridSquare) { return (gridSquare.coordinate.x == ship.state.coordinates[0] + i && gridSquare.coordinate.y == ship.state.coordinates[1] + j) })
            if (square != undefined) {
              square.blocked = true
            }
            break;
        }
      }
    }
  })
}

function DrawGrid(grid, ships) {
  setBlocked(grid, ships)

  grid.forEach(function (gridSquare) {
    gridSquare.selected = false;
  });


  ships.forEach(function (ship) {
    var toDrawSquares = []
    var coordinates = { "x": ship.state.coordinates[0], "y": ship.state.coordinates[1] }
    var origin = grid.find(function (gridSquare) { return (gridSquare.coordinate.x == coordinates.x && gridSquare.coordinate.y == coordinates.y) })
    if (origin != undefined) {
      toDrawSquares.push(origin)
    }


    for (var i = 0; i < ship.state.hitpoints; i++) {
      switch (!ship.state.isHorizontal) {
        case true:
          var square = grid.find(function (gridSquare) { return (gridSquare.coordinate.x == ship.state.coordinates[0] && gridSquare.coordinate.y == ship.state.coordinates[1] + i) })
          if (square != undefined) {
            toDrawSquares.push(square)
          }
          break;
        case false:
          var square = grid.find(function (gridSquare) { return (gridSquare.coordinate.x == ship.state.coordinates[0] + i && gridSquare.coordinate.y == ship.state.coordinates[1]) })
          if (square != undefined) {
            toDrawSquares.push(square)
          }
          break;
      }
    }
    toDrawSquares.forEach(function (gridSquare) {
      gridSquare.selected = true
    })
  })
}


function ToggleHover(grid, item, size, isHorizontal) {

  grid.forEach(function (item) {
    item.hover = false;
  });

  for (var i = 0; i < size; i++) {
    switch (!isHorizontal) {
      case true:
        var square = grid.find(function (gridSquare) { return (gridSquare.coordinate.x == item.coordinate.x && gridSquare.coordinate.y == item.coordinate.y + i) })
        if (square != undefined) {
          square.hover = true
        }
        break;
      case false:
        var square = grid.find(function (gridSquare) { return (gridSquare.coordinate.x == item.coordinate.x + i && gridSquare.coordinate.y == item.coordinate.y) })
        if (square != undefined) {
          square.hover = true
        }
        break;
    }
  }

  grid[item.id].hover = true;
  return grid;
}


function ReturnBoolState(selectionState, message) {
  if (selectionState) {
    return message;
  }
  else {
    return "";
  }
}

function ReturnCSS(gridSquare){
  if(gridSquare.selected){
    return "selected"
  }
  if(gridSquare.hover){
    return "preview"
  }
  if(gridSquare.blocked){
    return "blocked"
  }
}

function IfExists(item) {
  if (item) {
    return true;
  }
  else {
    return false;
  }
}
