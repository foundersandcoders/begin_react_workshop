"use strict";
import React, { Component, PropTypes } from "react";

export default class FruitFooter extends Component {
	render() {
		return (
			<div className="options-item">
					<button onClick={this.props.clearItems} className="clear">
						<img id="restart" src="assets/img/glyphicon-restart.png" />
					</button>
			</div>
		);
	}
}

FruitFooter.propTypes = {
	clearItems: PropTypes.func.isRequired
};