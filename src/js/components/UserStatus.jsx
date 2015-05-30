var React = require("react");

var UserStatus = React.createClass({
  render: function() {
    return (
      <p>{this.props.content + (this.props.liked ? " :)" : " :(")}</p>
    );
  }
});

module.exports = UserStatus;