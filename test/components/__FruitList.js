"use strict";
import assert from "assert";
import React from "react/addons";
import FruitListItem from "../../src/js/components/FruitListItem.jsx";

import FruitList 	from "../../src/js/components/FruitList.jsx";

let { TestUtils } = React.addons;

describe("FruitList", () => {
	const shallowRenderer = TestUtils.createRenderer();

	const items = [
		{ fruit: "chickens", quantity: 1, id: 123},
		{ fruit: "avocado",  quantity: 4, id: 423},
		{ fruit: "chow",     quantity: 3, id: 323}
	];
	const filterText = "ch";
	const incrementQuantity = () => {};
	const decrementQuantity = () => {};

	shallowRenderer.render(
		<FruitList
				items={items}
				filterText={filterText}
				incrementQuantity={incrementQuantity}
				decrementQuantity={decrementQuantity}
		/>
	);

	const output = shallowRenderer.getRenderOutput();

	it("#renders a FruitListItem for each element in items, filtered by the text", () => {
		const kids = output.props.children;

		assert.equal(kids.length, 2);
		kids.forEach((k, i) => {
			assert.equal(k.type, FruitListItem);
		});
	});
});