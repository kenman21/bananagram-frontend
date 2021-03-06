import React from 'react'

class Tile extends React.Component {

  render(){
    return(
      <div className="column">
        <div className="ui card" draggable onDragStart={(e) => { this.props.onDragStart ? this.props.onDragStart(e, this.props.letter, this.props.openGameroom, this.props.position):null}} >
          <div className="content">
            { (this.props.pickTile) ?  " " : this.props.letter.value }
          </div>
        </div>
      </div>

    )
  }
}

export default Tile
