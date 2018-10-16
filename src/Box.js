import React, { Component } from 'react';
import './Board.css'

class Box extends Component {
	constructor(props){
		super(props)
		this.state={
			message: '',

		}
	}

	clickHandler = (e) => {
		let message = this.state.message
		if(!this.state.message) {
			//this changes player1 from true(X) to false(O') or visa versa

			if (this.props.player === true) {
				this.setState({message: 'X'})
			} else {
				this.setState({message: 'O'})
			}
			this.props.switchPlayer();
		}
		this.props.getMoves(this.props.id, this.state.message)
	}

  render() {
    return (
		<div className="squares"  id= {this.props.id} onClick={this.clickHandler}>{this.state.message} </div>

	)
  }
}

export default Box;
