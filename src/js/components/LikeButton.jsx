var React = require("react");

var LikeButton = React.createClass({

  clickHandler: function(e) {
    this.props.toggleLike();
  },

  render: function() {
    var buttonClass = "like";

    if(this.props.liked) {
      buttonClass += " yup";
    }

    return (
      <button className={buttonClass} onClick={this.clickHandler}>
        {this.props.liked ? "-" : "+"}
      </button>
    );
  }
});

module.exports = LikeButton;