"use strict";
import React, { Component, PropTypes } from "react";

export default class FruitListItem extends Component {
	render() {
		let { incrementQuantity, decrementQuantity } = this.props;

		return (
			<div className="fruit-item">
				<button className="minus" onClick={decrementQuantity}>-</button>
				{this.props.content}
				<button className="plus" onClick={incrementQuantity}>+</button>
				<span className="list-number">{this.props.quantity}</span>
			</div>
		);
	}
}

FruitListItem.propTypes = {
	content: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
	incrementQuantity: PropTypes.func.isRequired,
	decrementQuantity: PropTypes.func.isRequired
};
