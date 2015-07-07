"use strict";
import React, { Component, PropTypes } from "react";
import FruitListItem from "./FruitListItem.jsx";

export default class FruitList extends Component {

	render() {
		let items = [];

		this.props.items.forEach((item, i) => {
			if (item.fruit.indexOf(this.props.filterText) !== -1) {
				items.push(
					<FruitListItem key={i} content={item.fruit} quantity={item.quantity}
						incrementQuantity={this.props.incrementQuantity.bind(null, item.id)}
						decrementQuantity={this.props.decrementQuantity.bind(null, item.id)}
					/>
				);
			}
		});

		return (
			<div className="fruit-list">
				{items}
			</div>
			);
	}
}

FruitList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	filterText: PropTypes.string,
	incrementQuantity: PropTypes.func.isRequired,
	decrementQuantity: PropTypes.func.isRequired
};