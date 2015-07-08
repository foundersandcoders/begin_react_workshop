"use strict";
import assert from "assert";
import React from "react/addons";

import FruitHeader from "../../src/js/components/FruitHeader.jsx";

let { TestUtils } = React.addons;

describe("FruitHeader", () => {
	let output, result;

	const title = "fruit";
	const func = (val) => { result = val; };

	beforeEach(() => {
		result = null;
		output = TestUtils.renderIntoDocument(
			<FruitHeader
					title={title}
					addItem={func}
					changeText={func}
			/>
		);
	});

	it("#renders a form, consisting of an input and a button", () => {
		const formComponent = TestUtils.findRenderedDOMComponentWithTag(
			output,
			"form"
		);

		const kids = formComponent.props.children;

		assert.equal(kids.filter(e => e.type === "input").length, 1);
		assert.equal(kids.filter(e => e.type === "button").length, 1);
	});

	it("#calls this.props.addItem with this.props.title when the form is submitted", () => {
		const formComponent = TestUtils.findRenderedDOMComponentWithTag(
			output,
			"form"
		);
		const formNode = React.findDOMNode(formComponent);

		TestUtils.Simulate.submit(formNode);
		assert.equal(result, title);
	});

	it("#calls this.props.changeText with e.target.value when the input changes", () => {
		const inputComponent = TestUtils.findRenderedDOMComponentWithTag(
			output,
			"input"
		);
		const inputNode = React.findDOMNode(inputComponent);

		TestUtils.Simulate.change(inputNode, {target: {value: "hey m8"}});
		assert.equal(result, "hey m8");
	});
});