var React = require("react");

var Props = React.PropTypes;

var FruitFooter = React.createClass({

	propTypes: {
		clearItems: Props.func.isRequired
	},

	render: function() {
		return (
			<div className="options-item">
			    <button onClick={this.props.clearItems} className="clear">
			    	<img id="restart" src="assets/img/glyphicon-restart.png" />
			    </button>
			</div>
		);
	}

});

module.exports = FruitFooter;