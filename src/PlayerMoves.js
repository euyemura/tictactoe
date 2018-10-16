import React, { Component } from 'react';

// import './PlayerMoves.css';

class PlayerMoves extends Component {
	constructor(props){
		super(props)
		this.state={

		}
	}

winningCombos(arr) {
	let winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
	//take the id, compare it to array of winning combos, and then if we find one, then we check if they were all x or //o.
   let emptyArr= arr.map(function(thot) {
	   return thot[1]
   })

   let xValues = emptyArr.map(function(el, index){
	   if (index % 2 === 0){
		   return el
	   }
	 })
	let oValues = emptyArr.map(function(el, index){
		if (index % 2 === 1 ){
			return el
		}
	})
	// console.log(xValues)
	// console.log('o', oValues)
   // }

	if (emptyArr.length > 5) {
		//check this array by checking every other vvalue to find only x values and only o values
		for (var i = 0; i < winningCombos.length; i++) {
			// if(winningCombos.includes(xValues)){
			// 	console.log("X won")
			// } else if (winningCombos.includes(oValues)){
			// 	console.log("O won")
			// }
			// }
			console.log('x won', winningCombos.includes(xValues))
			}
}
}

   	// console.log(emptyArr)
 	// return emptyArr
// }





  render() {

    return (
<div>
	<p>{this.winningCombos(this.props.moves)}</p>
</div>
	)
  }
}

export default PlayerMoves;
