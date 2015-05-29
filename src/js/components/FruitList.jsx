var React 		  	= require("react");
var FruitListItem = require("./FruitListItem.jsx");

var Props = React.PropTypes;

var FruitList = React.createClass({

	propTypes: {
		items: Props.arrayOf(Props.object),
		filterText: Props.string,
		incrementQuantity: Props.func.isRequired,
		decrementQuantity: Props.func.isRequired
	},

	render: function() {
		var items = [];

		this.props.items.forEach(function(item) {
			if (item.fruit.indexOf(this.props.filterText) !== -1) {
				items.push(
					<FruitListItem key={item.id} content={item.fruit} quantity={item.quantity}
						incrementQuantity={this.props.incrementQuantity.bind(null, item.id)}
						decrementQuantity={this.props.decrementQuantity.bind(null, item.id)}
					/>
				);
			}
		}, this);

		return (
			<div className="fruit-list">
				{items}
			</div>
			);
	}

});

module.exports = FruitList;