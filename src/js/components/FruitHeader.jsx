"use strict";
import React, { Component, PropTypes } from "react";

export default class FruitHeader extends Component {

	textChangeHandler(e) {
		e.preventDefault();
		this.props.changeText(e.target.value);
	}

	submitHandler(e) {
		e.preventDefault();
		this.props.addItem(this.props.title);
	}

	render() {
		return (
			<form onSubmit={this.submitHandler.bind(this)} className="fruit-header">
				<input value={this.props.title}
					onChange={this.textChangeHandler.bind(this)} className="searchbar"
					type="text" placeholder="5-a-day tracker"
				/>
				<button className="plus">
					<img src="assets/img/glyphicon-leaf.png" />
				</button>
			</form>
		);
	}
}

FruitHeader.propTypes = {
	title: PropTypes.string,
	changeText: PropTypes.func.isRequired,
	addItem: PropTypes.func
};