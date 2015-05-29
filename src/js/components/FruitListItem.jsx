var React = require("react");

var Props = React.PropTypes;

var FruitListItem = React.createClass({

	propTypes: {
		content: Props.string.isRequired,
		quantity: Props.number.isRequired,
		incrementQuantity: Props.func.isRequired,
		decrementQuantity: Props.func.isRequired
	},

	plusHandler: function(e) {
		e.preventDefault();
		this.props.incrementQuantity();
	},

	minusHandler: function(e) {
		e.preventDefault();
		this.props.decrementQuantity();
	},

	render: function() {
		return (
			<div className="fruit-item">
			    <button className="minus" onClick={this.minusHandler}>-</button>
			    {this.props.content}
			    <button className="plus" onClick={this.plusHandler}>+</button>
			    <span className="list-number">{this.props.quantity}</span>
			</div>
		);
	}

});

module.exports = FruitListItem;