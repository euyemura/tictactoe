import React, { Component } from 'react';
import Box from './Box.js'
import './Board.css'
import './App.css';

class Board extends Component {
	constructor(props){
		super(props)
		this.state = {
			player1: false,
			playerMoves: ''
		}
	}

switchPlayer = () => {
	if (this.state.player1){
	this.setState({player1: false})
}  else {
	this.setState({player1: true})
}
}

getMoves = (id, message) => {
	this.setState({playerMoves: id + message})
}

  render() {
	  console.log(this.state.playerMoves)
    return (
	<div>
		<h1> Tic Tac Toe Game </h1>
		<div className="parent">

			<Box id={1} switchPlayer={this.switchPlayer} player={this.state.player1} getMoves={this.getMoves}/>
			<Box id={2} switchPlayer={this.switchPlayer} player={this.state.player1} getMoves={this.getMoves}/>
			<Box id={3} switchPlayer={this.switchPlayer} player={this.state.player1} getMoves={this.getMoves}/>
		</div>

		<div className="parent">
			<Box id={4} switchPlayer={this.switchPlayer} player={this.state.player1} getMoves={this.getMoves}/>
			<Box id={5} switchPlayer={this.switchPlayer} player={this.state.player1} getMoves={this.getMoves}/>
			<Box id={6} switchPlayer={this.switchPlayer} player={this.state.player1} getMoves={this.getMoves}/>
		</div>

		<div className="parent">
			<Box id={7} switchPlayer={this.switchPlayer} player={this.state.player1} getMoves={this.getMoves}/>
			<Box id={8} switchPlayer={this.switchPlayer} player={this.state.player1} getMoves={this.getMoves}/>
			<Box id={9} switchPlayer={this.switchPlayer} player={this.state.player1} getMoves={this.getMoves}/>
		</div>


	</div>
    );
  }
}

export default Board;
