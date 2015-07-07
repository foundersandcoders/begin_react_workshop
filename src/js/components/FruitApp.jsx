"use strict";
import React, { Component, PropTypes } from "react";
import FruitHeader from "./FruitHeader.jsx";
import FruitList 	from "./FruitList.jsx";
import FruitFooter from "./FruitFooter.jsx";

export default class FruitApp extends Component {
	render() {
		return (
			<div className="app-wrapper">
				<FruitHeader title={this.props.headerText}
					addItem={this.props.addFruit}
					changeText={this.props.changeText}
				/>
				<FruitList items={this.props.fruities}
					filterText={this.props.headerText}
					incrementQuantity={this.props.incrementQuantity}
					decrementQuantity={this.props.decrementQuantity}
				/>
				<FruitFooter clearItems={this.props.clearFruities} />
			</div>
		);
	}
}

FruitApp.propTypes = {
	fruities: PropTypes.arrayOf(PropTypes.object),
	headerText: PropTypes.string,
	addFruit: PropTypes.func.isRequired,
	changeText: PropTypes.func.isRequired,
	incrementQuantity: PropTypes.func.isRequired,
	decrementQuantity: PropTypes.func.isRequired,
	clearFruities: PropTypes.func.isRequired
};