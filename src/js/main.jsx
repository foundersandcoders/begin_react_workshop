var React = require("react");

var UserName = React.createClass({
  render: function() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
});

var UserStatus = React.createClass({
  render: function() {
    return (
      <p>{this.props.content + (this.props.liked ? " :)" : " :(")}</p>
    );
  }
});

var LikeButton = React.createClass({

  clickHandler: function(e) {
    this.props.toggleLike();
  },

  render: function() {
    var cl = "like";

    if(this.props.liked) {
      cl += " yup";
    }

    return (
      <button className={cl} onClick={this.clickHandler}>
        {this.props.liked ? "-" : "+"}
      </button>
    );
  }
});

var User = React.createClass({
  getInitialState: function() {
    return {
      liked: false
    };
  },

  toggleLike: function() {
    this.setState({
      liked: !this.state.liked
    });
  },

  render: function() {
    return (
      <div className="app">
        <UserName name="anon" />
        <LikeButton liked={this.state.liked} toggleLike={this.toggleLike} />
        <UserStatus liked={this.state.liked} content="something about the election" />
      </div>
    );
  }
});

React.render(<User />, document.getElementById("content"));