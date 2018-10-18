import React, { Component } from 'react';
import './Board.css'

class Box extends Component {
	constructor(props){
		super(props)
		this.state={

		}
	}

	clickHandler = (e) => {
		let message = ""
		if(!this.props.messages[this.props.id-1] && !this.props.gameOver) {
			//this changes player1 from true(X) to false(O') or visa versa

			if (this.props.player === true) {
				message = this.props.avatar1
			} else {
				message = this.props.avatar2
			} this.props.setMessage(this.props.id, message)
			this.props.switchPlayer(message, this.props.id);
		}
		this.props.checkWin(this.props.moves)
	}

  render() {

    return (
		<div className="squares"  id= {this.props.id}  onClick={this.clickHandler}>{this.props.messages[this.props.id-1]}</div>

	)
  }
}

export default Box;
