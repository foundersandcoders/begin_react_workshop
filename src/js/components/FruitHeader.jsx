var React = require("react");

var Props = React.PropTypes;

var FruitHeader = React.createClass({

	propTypes: {
		title: Props.string,
		changeText: Props.func.isRequired,
		addItem: Props.func
	},

	textChangeHandler: function(e) {
		e.preventDefault();
		this.props.changeText(e.target.value);
	},

	submitHandler: function(e) {
		e.preventDefault();
		this.props.addItem(this.props.title);
	},

	render: function() {
		return (
			<form onSubmit={this.submitHandler} className="fruit-header">
			    <input value={this.props.title} onChange={this.textChangeHandler} className="searchbar" type="text" placeholder="5-a-day tracker"/>
			    <button onClick={this.submitHandler} className="plus"><img src="assets/img/glyphicon-leaf.png" /></button>
			</form>
		);
	}
});

module.exports = FruitHeader;