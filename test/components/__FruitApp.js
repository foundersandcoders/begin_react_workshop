"use strict";
import assert from "assert";
import React from "react/addons";
import FruitHeader from "../../src/js/components/FruitHeader.jsx";
import FruitList 	from "../../src/js/components/FruitList.jsx";
import FruitFooter from "../../src/js/components/FruitFooter.jsx";

import FruitApp from "../../src/js/components/FruitApp.jsx";

let { TestUtils } = React.addons;

describe("FruitApp", () => {

	const shallowRenderer = TestUtils.createRenderer();

	const fruities = [ { id: 1, fruit: "apple" } ];
	const headerText = "hi";
	const func = () => {};

	shallowRenderer.render(
		<FruitApp
				fruities={fruities}
				headerText={headerText}
				addFruit={func}
				changeText={func}
				incrementQuantity={func}
				decrementQuantity={func}
				clearFruities={func}
		/>
	);

	const rootEl = shallowRenderer.getRenderOutput();
	const kids = rootEl.props.children;

	it("#renders a FruitHeader with the correct props", () => {
		const headers = kids.filter(e => e.type === FruitHeader);
		assert.equal(headers.length, 1);

		const props = headers.pop().props;

		assert.deepEqual(props, {
			title: headerText,
			addItem: func,
			changeText: func
		});
	});

	it("#renders a FruitList with the correct props", () => {
		const lists = kids.filter(e => e.type === FruitList);
		assert.equal(lists.length, 1);

		const props = lists.pop().props;

		assert.deepEqual(props, {
			items: fruities,
			filterText: headerText,
			incrementQuantity: func,
			decrementQuantity: func
		});
	});

	it("#renders a FruitFooter with the correct props", () => {
		const footers = kids.filter(e => e.type === FruitFooter);
		assert.equal(footers.length, 1);

		const props = footers.pop().props;

		assert.deepEqual(props, {
			clearItems: func
		});
	});
});