import React, { Component } from 'react';
import Box from './Box.js'
import './Board.css'
import './App.css';


class Board extends Component {
	constructor(props){
		super(props)
		this.state = {
			player1: true,
			playerMoves: [],
			gameOver: false,
			gameMessage: '',
			messages: ['','','','','','','','','']
		}
	}

switchPlayer = (message, id) => {
	this.state.playerMoves.push([message, id])
	// console.log(message + " " + id);
	if (this.state.player1){
	this.setState({player1: false})
}  else {
	this.setState({player1: true})
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

	if (emptyArr.length >= 5) {
		//check this array by checking every other vvalue to find only x values and only o values
		for (var i = 0; i < winningCombos.length; i++) {
			if(xValues.includes(winningCombos[i][0]) && xValues.includes(winningCombos[i][1]) && xValues.includes(winningCombos[i][2])){
				console.log("X wins");
				this.setGame("X WINS")
				return true
			} else if (oValues.includes(winningCombos[i][0]) && oValues.includes(winningCombos[i][1]) && oValues.includes(winningCombos[i][2])) {
				console.log("O Wins");
				this.setGame("O WINS")
				return true
			} else if(emptyArr.length  === 9) {
				console.log("Terrible");
				this.setGame("YOU BOTH SUCK")
				return true;
			}
		}
	}
}

setGameOver = (message) => {
	console.log('game over')
	this.setState({gameOver: true, gameMessage: message})
}


resetGame = () => {
	this.setState({player1: true,
				playerMoves: [],
				gameOver: false,
				gameMessage: '',
				messages: ['','','','','','','','','']})

}

setMessage = (id , message) => {
	this.state.messages[id-1] = message
	this.forceUpdate()
}

  render() {
    return (
	<div>
		<h1> Tic Tac Toe Game </h1>
		<div className="parent">
			<Box id={1} setMessage={this.setMessage} messages={this.state.messages} resetGame={this.state.resetGame} setGame={this.setGameOver} moves={this.state.playerMoves} switchPlayer={this.switchPlayer} player={this.state.player1} checkWin={this.winningCombos} gameOver={this.state.gameOver} />
			<Box id={2} setMessage={this.setMessage} messages={this.state.messages} resetGame={this.state.resetGame} setGame={this.setGameOver} moves={this.state.playerMoves} switchPlayer={this.switchPlayer} player={this.state.player1} checkWin={this.winningCombos} gameOver={this.state.gameOver} />
			<Box id={3} setMessage={this.setMessage} messages={this.state.messages} resetGame={this.state.resetGame} setGame={this.setGameOver} moves={this.state.playerMoves} switchPlayer={this.switchPlayer} player={this.state.player1} checkWin={this.winningCombos} gameOver={this.state.gameOver} />
		</div>

		<div className="parent">
			<Box id={4} setMessage={this.setMessage} messages={this.state.messages} resetGame={this.state.resetGame} setGame={this.setGameOver} moves={this.state.playerMoves} switchPlayer={this.switchPlayer} player={this.state.player1} checkWin={this.winningCombos} gameOver={this.state.gameOver} />
			<Box id={5} setMessage={this.setMessage} messages={this.state.messages} resetGame={this.state.resetGame} setGame={this.setGameOver} moves={this.state.playerMoves} switchPlayer={this.switchPlayer} player={this.state.player1} checkWin={this.winningCombos} gameOver={this.state.gameOver} />
			<Box id={6} setMessage={this.setMessage} messages={this.state.messages} resetGame={this.state.resetGame} setGame={this.setGameOver} moves={this.state.playerMoves} switchPlayer={this.switchPlayer} player={this.state.player1} checkWin={this.winningCombos} gameOver={this.state.gameOver} />
		</div>

		<div className="parent">
			<Box id={7} setMessage={this.setMessage} messages={this.state.messages} resetGame={this.state.resetGame} setGame={this.setGameOver} moves={this.state.playerMoves} switchPlayer={this.switchPlayer} player={this.state.player1} checkWin={this.winningCombos} gameOver={this.state.gameOver} />
			<Box id={8} setMessage={this.setMessage} messages={this.state.messages} resetGame={this.state.resetGame} setGame={this.setGameOver} moves={this.state.playerMoves} switchPlayer={this.switchPlayer} player={this.state.player1} checkWin={this.winningCombos} gameOver={this.state.gameOver} />
			<Box id={9} setMessage={this.setMessage} messages={this.state.messages} resetGame={this.state.resetGame} setGame={this.setGameOver} moves={this.state.playerMoves} switchPlayer={this.switchPlayer} player={this.state.player1} checkWin={this.winningCombos} gameOver={this.state.gameOver} />
		</div>
			<p>{this.state.gameMessage}</p>
			<button onClick={this.resetGame}>Reset</button>
	</div>
    );
  }
}

export default Board;
