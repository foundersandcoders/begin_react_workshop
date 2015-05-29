var React = require("react");

var FruitListItem = React.createClass({

	render: function() {
		return (
			<div className="fruit-item">
			    <button className="minus">-</button>
			    {this.props.fruit}
			    <button className="plus">+</button>
			    <span className="list-number">{this.props.quantity}</span>
			</div>
		);
	}

});

module.exports = FruitListItem;