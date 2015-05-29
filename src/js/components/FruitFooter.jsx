var React = require("react");

var FruitFooter = React.createClass({
	
	render: function() {
		return (
			<div className="options-item">
			    <button className="clear"><img id="restart" src="assets/img/glyphicon-restart.png" /></button>
			</div>
		);
	}

});

module.exports = FruitFooter;