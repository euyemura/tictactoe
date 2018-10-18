import React, { Component } from 'react';
import Board from './Board.js';
import './Board.css';
import './App.css';

class App extends Component {
	constructor(props){
		super(props)
		this.state={

		}
	}




  render() {
    return (
	<div className="gameBoard">
		<Board />
	</div>
	)
  }
}

export default App;
