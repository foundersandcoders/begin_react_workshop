"use strict";
import React, { Component } from "react";
import FruitApp from "./FruitApp.jsx";

function getStateFromData() {
	return {
		headerText: "",
		fruities: [
			{ id: "123456", fruit: "Chicken", quantity:6 },
			{ id: "123467", fruit: "Apples",  quantity:2 },
			{ id: "123478", fruit: "Oranges", quantity:4 },
			{ id: "123489", fruit: "Peaches", quantity:1 }
		]
	};
}

export default class FruitAppContainer extends Component {

	constructor(props) {
		super(props);
		this.state = getStateFromData();
	}

	addFruit(name) {
		if (name === "") return;

		const timestamp = Date.now().toString();
		const freshFruit = {
			id: timestamp.slice(timestamp.length - 6),
			fruit: name,
			quantity: 1
		};

		let newFruities = this.state.fruities.concat([freshFruit]);
		this.setState({headerText: "", fruities: newFruities});
	}

	changeText(text) {
		this.setState({headerText: text});
	}

	decrementQuantity(id) {
		let newFruities = [];

		this.state.fruities.forEach(function(ele) {
			if (ele.id === id) {
				if (ele.quantity === 0) return;
				else ele.quantity -= 1;
			}
			newFruities.push(ele);
		});

		this.setState({fruities: newFruities});
	}

	incrementQuantity(id) {
		let newFruities = [];

		this.state.fruities.forEach(function(ele) {
			if (ele.id === id) ele.quantity += 1;
			newFruities.push(ele);
		});

		this.setState({fruities: newFruities});
	}

	clearFruities() {
		this.setState({fruities: []});
	}

	render() {
		return (
			<FruitApp
				fruities={this.state.fruities}
				headerText={this.state.headerText}
				addFruit={this.addFruit.bind(this)}
				changeText={this.changeText.bind(this)}
				incrementQuantity={this.incrementQuantity.bind(this)}
				decrementQuantity={this.decrementQuantity.bind(this)}
				clearFruities={this.clearFruities.bind(this)}
			/>
		);
	}
}