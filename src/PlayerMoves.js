import React, { Component } from 'react';

// import './PlayerMoves.css';

class PlayerMoves extends Component {
	constructor(props){
		super(props)
		this.state={

		}
	}

	// let winningCombos = [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]



  render() {
	  console.log(this.props.moves);
    return (
<div>
	<p>{this.props.moves}</p>
</div>
	)
  }
}

export default PlayerMoves;
