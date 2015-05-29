var React 		    = require("react");
var FruitListItem = require("./FruitListItem.jsx");

var FruitList = React.createClass({

	render: function() {
		var fruititems = this.props.fruities.map(function(fruitObject, i) {
			return (
				<FruitListItem key={i} fruit={fruitObject.fruit} quantity={fruitObject.quantity} />
			);
		});
		return (
			<div className="fruit-list">
				{fruititems}
			</div>
			);
	}

});

module.exports = FruitList;