import React, { Component } from 'react';

// import './PlayerMoves.css';

class PlayerMoves extends Component {
	constructor(props){
		super(props)
		this.state={

		}
	}

	// let winningCombos = [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
winningCombos(arr) {
	//take the id, compare it to array of winning combos, and then if we find one, then we check if they were all x or //o.
   let emptyArr= arr.map(function(thot) {
	   return thot[1]
   })

   	console.log(emptyArr)
 	return emptyArr
}


  render() {

    return (
<div>
	<p>{this.winningCombos(this.props.moves)}</p>
</div>
	)
  }
}

export default PlayerMoves;
