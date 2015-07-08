"use strict";
import assert from "assert";
import React from "react/addons";

import FruitListItem from "../../src/js/components/FruitListItem.jsx";

let { TestUtils } = React.addons;

describe("FruitListItem", () => {
	let output, result;

	const content = "fruit";
	const quantity = 3;
	const func = () => { result = true; };

	beforeEach(() => {
		result = null;
		output = TestUtils.renderIntoDocument(
			<FruitListItem
					content={content}
					quantity={quantity}
					incrementQuantity={func}
					decrementQuantity={func}
			/>
		);
	});

	it("#renders a button that calls this.props.decrementQuantity on click", () => {
		const minusComponent = TestUtils.findRenderedDOMComponentWithClass(
			output,
			"minus"
		);

		const minusNode = React.findDOMNode(minusComponent);

		TestUtils.Simulate.click(minusNode);
		assert(result);
	});

	it("#renders a button that calls this.props.incrementQuantity on click", () => {
		const plusComponent = TestUtils.findRenderedDOMComponentWithClass(
			output,
			"plus"
		);

		const plusNode = React.findDOMNode(plusComponent);

		TestUtils.Simulate.click(plusNode);
		assert(result);
	});
});