var React = require("react");

var FruitHeader = React.createClass({
	render: function() {
		return (
			<div className="fruit-header">
			    <input className="searchbar" type="text" placeholder="5-a-day tracker" />
			    <button className="plus"><img src="assets/img/glyphicon-leaf.png" /></button>
			</div>
		);
	}
});

module.exports = FruitHeader;