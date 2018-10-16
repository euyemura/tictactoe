import React, { Component } from 'react';
import Board from './Board.js'
import './App.css';

class App extends Component {
	constructor(props){
		super(props)
		this.state={
			playerMoves: ''
		}
	}




  render() {
    return (
		<Board />

	)
  }
}

export default App;
