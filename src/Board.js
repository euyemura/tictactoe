import React, { Component } from 'react';
import Box from './Box.js'
import './Board.css'
import './App.css';
import PlayerMoves from './PlayerMoves.js'

class Board extends Component {
	constructor(props){
		super(props)
		this.state = {
			player1: true,
			playerMoves: []
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


  render() {
    return (
	<div>
		<h1> Tic Tac Toe Game </h1>
		<div className="parent">
			<Box id={1} switchPlayer={this.switchPlayer} player={this.state.player1}/>
			<Box id={2} switchPlayer={this.switchPlayer} player={this.state.player1}/>
			<Box id={3} switchPlayer={this.switchPlayer} player={this.state.player1}/>
		</div>

		<div className="parent">
			<Box id={4}switchPlayer={this.switchPlayer} player={this.state.player1}/>
			<Box id={5}switchPlayer={this.switchPlayer} player={this.state.player1}/>
			<Box id={6}switchPlayer={this.switchPlayer} player={this.state.player1}/>
		</div>

		<div className="parent">
			<Box id={7} switchPlayer={this.switchPlayer} player={this.state.player1}/>
			<Box id={8} switchPlayer={this.switchPlayer} player={this.state.player1}/>
			<Box id={9} switchPlayer={this.switchPlayer} player={this.state.player1}/>
		</div>
		<PlayerMoves moves={this.state.playerMoves} />

	</div>
    );
  }
}

export default Board;
