"use strict";
import assert from "assert";
import React from "react/addons";
import FruitApp from "../../src/js/components/FruitApp.jsx";

import FruitAppContainer from "../../src/js/components/FruitAppContainer.jsx";

let { TestUtils } = React.addons;

describe("FruitAppContainer", () => {
	let result = {};
	let app;

	class TestApp extends FruitAppContainer {
		setState(toMergeWithState) {
			result = toMergeWithState;
		}
	}

	beforeEach(() => {
		result = {};
		app = new TestApp();
	});

	describe(".addFruit", () => {

		it("#takes a name and adds a new fruit to the fruities array", () => {
			const oldFruitLength = app.state.fruities.length;

			app.addFruit("ham");

			assert.equal(result.fruities.length, oldFruitLength + 1);
			assert.equal(result.fruities.pop().fruit, "ham");
		});

		it("#does nothing if the passed name is empty", () => {
			app.addFruit("");
			assert.equal(result.fruit, undefined);
		});
	});

	describe(".decrementQuantity", () => {

		it("#takes an id and decrements that fruit's quantity", () => {
			const fruitToDecrement = app.state.fruities[1];
			let oldQuantity = fruitToDecrement.quantity;

			app.decrementQuantity(fruitToDecrement.id);

			const decremented = result.fruities.filter(e =>
				e.id === fruitToDecrement.id
			).pop();

			assert.equal(decremented.quantity, oldQuantity - 1);
		});

		it("#deletes the fruit if it's pre-decremented quantity is 0", () => {
			const fruitToDelete = app.state.fruities[0];
			fruitToDelete.quantity = 0;

			app.decrementQuantity(fruitToDelete.id);

			const noResults = result.fruities.filter(e =>
				e.id === fruitToDelete.id
			);

			assert.equal(noResults.length, 0);
		});
	});

	describe(".incrementQuantity", () => {

		it("#takes an id and increments that fruit's quantity", () => {
			const fruitToIncrement = app.state.fruities[2];
			let oldQuantity = fruitToIncrement.quantity;

			app.incrementQuantity(fruitToIncrement.id);

			const incremented = result.fruities.filter(e =>
				e.id === fruitToIncrement.id
			).pop();

			assert.equal(incremented.quantity, oldQuantity + 1);
		});
	});

	it(".renders a FruitApp", () => {
		const shallowRenderer = TestUtils.createRenderer();

		shallowRenderer.render(
			<FruitAppContainer />
		);

		const el = shallowRenderer.getRenderOutput();

		assert.equal(el.type, FruitApp);
	});
});