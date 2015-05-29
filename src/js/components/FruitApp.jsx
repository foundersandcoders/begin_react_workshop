var React = require("react");
var FruitHeader = require("./FruitHeader.jsx");
var FruitList 	= require("./FruitList.jsx");
var FruitFooter = require("./FruitFooter.jsx");

var Props = React.PropTypes;

var FruitApp = React.createClass({

	propTypes: {
		"fruities": Props.arrayOf(Props.object),
		"headerText": Props.string,
		"addFruit": Props.func.isRequired,
		"changeText": Props.func.isRequired,
		"incrementQuantity": Props.func.isRequired,
		"decrementQuantity": Props.func.isRequired,
		"clearFruities": Props.func.isRequired
	},

	render: function() {
		return (
			<div className="app-wrapper">
				<FruitHeader title={this.props.headerText}
					addItem={this.props.addFruit}
					changeText={this.props.changeText}
				/>
				<FruitList items={this.props.fruities}
					filterText={this.props.headerText}
					incrementQuantity={this.props.incrementQuantity}
					decrementQuantity={this.props.decrementQuantity}
				/>
				<FruitFooter clearItems={this.props.clearFruities} />
			</div>
		);
	}
});

module.exports = FruitApp;