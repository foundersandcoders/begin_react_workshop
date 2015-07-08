"use strict";
import assert from "assert";
import React from "react/addons";

import FruitFooter from "../../src/js/components/FruitFooter.jsx";

let { TestUtils } = React.addons;

describe("FruitFooter", () => {
	let output, result;

	const func = () => { result = true; };

	beforeEach(() => {
		result = null;
		output = TestUtils.renderIntoDocument(
			<FruitFooter clearItems={func} />
		);
	});

	it("#renders a button that calls this.props.clearItems on click", () => {
		const clearComponent = TestUtils.findRenderedDOMComponentWithClass(
			output,
			"clear"
		);

		const clearNode = React.findDOMNode(clearComponent);

		TestUtils.Simulate.click(clearNode);
		assert(result);
	});
});