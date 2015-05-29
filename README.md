## Begin React Workshop

So, today we're gonna learn some react.
We're gonna start by introducing you to the concepts in React by incrementally making a few components, and then after lunch, we'll build a basic app to entrench these concepts, consolidate what we've learned, learn some best practices, and generally try to fix most of the things wrong with the world today.

## Setup

```
git clone begin-react-workshop
cd begin-react-workshop
npm install
git checkout -b babysteps
```
Now you're all installed and good to go. Before we go any further, open up the `package.json` file. __{explain package.json briefly}__. So now to run our development scripts, in our terminal, type:
```
npm run dev
```
Open a browser of your choice and navigate to `localhost:8080`, and hopefully you'll see nothing there. What an anticlimax, but I'm still proud of you all.

## My First Render
Let's crack open `src/js/main.js` in our text-editor of choice. It'd be great if you could split-screen your text editor and your browser, since then you'll be able to see (almost) live changes to your code 'pon save. Anyway, these are gonna be your first few lines of React code, so treasure them, and get excited.
```js
var React = require("react");

React.render(
  <div>hi</div>,
  document.getElementById("content")
);
```
Amazing huh.

But what just happened? Well, although it might look like we've just grabbed something in the dom with the ID of `content` and replaced its contents, the story is a bit more roundabout than that.

What has actually happened is that this call to `render()` has produced a _representation_ of `<div>hi</div>` in the __virtual dom__. The difference between this new representation and the previous representation is calculated for us, and _only then_ does an actual re-render occur, and only for the elements in the document which have changed.

It's worth noting that this call will replace the contents of the 'container' node specified passed in as the second argument.

---
#### Q: who is `<div>` and why is it floating in my beautiful js?
#### A: `<div>` is JSX and it wants to help you
Even though `<div>` looks remarkably like html and so seems a bit lost sitting in your js, it's really a syntax extension for javascript called `JSX`.

It transpiles to js (that's what we're using the `browserify` transform `reactify` for), and ultimately is just an easier-to-read alternative to writing out to-be-rendered elements than plain js. Here's a comparison:
```js
// plain js
React.render(
  <div>hi</div>,
  document.getElementById("content")
);

// JSX
React.render(
  React.createElement("div", null, "hi"),
  document.getElementById("content")
);
```
Although it might seem off-putting at first (bundling our view and our view-logic together), it becomes natural after a while. Our view and view-logic is tightly coupled anyway, so having them in separate files just means more file-switching. It also lets us see, at a glance, the shape of our output.

---
## My First Component
_What's a component?_
Each component is a piece of UI. You can think of a component as a simple function that takes in some props and state (more on these later) and returns some HTML. At the bare minimum, a component must have a `render` method defined. Anyway, let's get to it:
```js
var React = require("react");

var UserName = React.createClass({
  render: function() {
    var name = "anon";
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
});

React.render(<UserName />, document.getElemenyById("content"));
```
Nice, so we can write javascript expressions within `JSX` by using those {curly braces}.

---

## My Second, Third and Fourth Components
```js
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
      <p>{this.props.content}</p>
    );
  }
});

var LikeButton = React.createClass({
  getDefaultProps: function() {
      return {
          liked: false
        };
    },

  render: function() {
    var cl = "like";

    if(this.props.liked) {
      cl += " yup";
    }

    return (
      <button className={cl}>
        S
      </button>
    );
  }
});

var User = React.createClass({
  render: function() {
    return (
      <div className="app">
        <UserName name="anon" />
        <LikeButton liked={true} />
        <UserStatus content="something about the election" />
      </div>
    );
  }
});

React.render(<User />, document.getElementById("content"));
```
Here we start to see the power of components. We are building individual, logically distinct parts of our UI, and then composing these parts to form the grand picture.
#### Props
Components have access to variables passed down to them through `this.props`. In this way we can supply components with content to render by passing that content in through the owner component.In `JSX` they are provided as attributes of the owned component.

An __owner__ component is just a component that sets the props of another component, and calls that component in its own `render()` method.
Props are, in essence, __immutable parameters__ passed down from above. A component should never try to modify its own `props` object.

The only way for props to change is for a __re-render to be triggered__ and so an owner component may pass different parameters down to the owned component. When is a re-render triggered? __Any time state changes__. State will be explained shortly, but first, there are a few other points to note in the above code:

* `getDefaultProps()` lets us specify sensible default props that can be overriden by prop-passing.
* Components can be used in `render()` just as HTML elements can
* As usual, we can only `return` one thing from a function. In this case, we must always return one root node regardless of its nesting
* JSX has the option of any tag being self-closing
* `className` rather than `class` in `JSX` (as `class` is a reserved word)
*  Also note that since conceptually we can think of each render being completely fresh, we don't need to manipulate the `className` string in `LikeButton` to account for subtracting `"yup"`.

---
## State & Event Handlers
That's all well and good, but let's get this UI a bit interactive. For that, we'll need __state__. The state of a component is restricted to what's in `this.state`. Whenever state changes, a re-render occurs.

Remember that rendering in React is all done through the virtual-dom - the actual DOM manipulation is taken care of for us in an optimal way. So all we have to care about it __setting state__, and not managing the nitty-gritty logic of data transitioning  __between__ different states.

It'd be great if `LikeButton` turned yellow when you'd liked it. Let's take a look at what `LikeButton` looks like when it does this.
```js
...
var LikeButton = React.createClass({
  getInitialState: function() {
    return {
      liked: false
    };
  },

  clickHandler: function(e) {
    this.setState({
      liked: !this.state.liked
    });
  },

  render: function() {
    var cl = "like";

      if(this.state.liked) {
        cl += " yup";
      }

    return (
      <button className={cl} onClick={this.clickHandler}>
        {this.state.liked ? "-" : "+"}
      </button>
    );
  }
});
...
```
#### Ugh, what's that? _Inline event handlers?_
Well, not really. Although they're inline in our JSX, that's for our sake. It lets us declare which elements do what.
Behind the scenes, there's __event delegation__. It doesn't bind listeners to nodes directly, but listens for events at the top level with a single event-listener. When we add an event listener like we've just done, that adds an event handler to a top-level internal mapping, and so when an event occurs, React can dispatch the event according to this mapping.
So that `e` that's getting passed into `clickHandler()` is actually a synthetic event that we can do a number of things with (e.g. the `preventDefault()` you may already know and love).

React also autobinds to the component instance for us, so there's no need for `.bind()` in this case. If we want that function to be called with some predefined argument though, we can partially apply the function like so:
```js
onClick={this.clickHandler.bind(null, "first argument")}
```

n.b. Event handlers are camelCase in JSX.
#### So what about state?
In React there is no __shared__ mutable state, but there is mutable state. State is completely internal to a component - components can't change other components' state, components can only change their own state.

Upon changing state, a re-render is triggered. We can change state through passing in the new values we want to __merge__ with current state to `this.setState()`. This is generally the only way you'll want to change state.

So state is useful for self-contained data which need not be published externally. In our case, whether we've liked or not liked the user's status only needs to be known by the button, and only the button knows about it.

We've attached an event listener to the button, so that when a click event happens, our `clickHandler()` function defined on the component is run. This function updates the state by calling `this.setState()`, merging the new value with the old. So, the boolean value of `this.state.liked` is flipped, `setState()` is called with that flipped value, and a re-render is triggered.

There's also this `getInitialState()` thing there. What's up with that? Well, it's like `getDefaultProps()` we saw earlier, but it provides the entire internal state of the component rather than sets a default. When you have a stateful component, it's best to declare all of the values you expect to be manipulating in state in `getInitialState()`, along with some representation of their expected data type. So you might have `willBeFilledByAjaxLater: []` in there, so that it's easy to see  that there is an array in state with that name.

As a principle, try to keep state to a minimum. If multiple components depend on the same state, find the common parent component and have that be stateful. For most simple apps, you can stick with having one stateful top-level component and the rest relying on props passed to them by higher-level components.

In that case, if state resides in a parent component, and there's no shared state, how can children components hope to change the UI in any way?

Well, remember how owners can pass data down to owned components through _props_? This data can be __anything__. What this means is that we can __define some state-modifying method on a stateful owner, and pass that method down through props to other components__. Let's try that out in our code:

```js
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

```
So now both `LikeButton` and `UserStatus` need to know the value of `liked`. We also want `liked` to change dynamically. So, we store `liked` in the common parent component, and that component is stateful. By storing `liked` in the parent's state, we can pass down its value to other components as props so they can make use of that value.

Since we want some interactivity in our app, we define some state-setting function in our stateful `User` component (`toggleLike()`). We then send that function down  to `LikeButton` as we would do normally. Finally, we just reference that function in the child component's `clickHandler()`, and _voila_, `LikeButton` is given a way to change the state of its parent.

This pattern will be your bread-and-butter in making React apps. Find some common parent that holds state. Define some state-setting functions in that parent component. Render child components in that parent, passing those methods down as props, and add event handlers to those child components which call `this.props.myFunkyStateSetter`.

---
So now that we've gone through the basics, we can start building an app to learn some more best-practices, patterns, and cement this knowledge!

## Dev tools

[__browserify__](http://browserify.org/) - lets you use the CommonJS `require` pattern in your frontend JS.
Trundles recursively through your 'requires', starting from an entry point, and outputs a single bundle of js containing all your code. Ask for that file in your HTML page, and you'll be good to go.

             `browserify srcFile -o destFile`

---
[__watchify__](https://www.npmjs.com/package/watchify) - browserify, but smarter. Only rebundles the changed parts of your
code.
             Watches your entry point for any changes and rebundles incrementally when it sees them.

              `watchify srcFile -o destFile`

---
[__reactify__](https://www.npmjs.com/package/reactify) - transpiles your JSX code to JS, when used as a transform with browserify. Also supports the transpiling of some es6 constructs with the `--es6` flag.

              `browserify -t reactify srcFile -o destFile`
              `watchify -t reactify srcFile -o destFile`

---
[__http-server__](https://www.npmjs.com/package/http-server) - `Python SimpleHTTPServer` but in node, and faster. Defaults to port 8080, but configurable with the `--port` flag

              `http-server`

---
[__live-reload__](https://www.npmjs.com/package/live-reload) - watches a directory for changes, and refreshes any HTML page currently open with a script tag pointing to the server.

              `live-reload watchPath --port 9081`

---
[__react dev-tools__](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - a chrome extension to make debugging (and your life in general) much easier. Accessible from the chrome dev tools.

---
__[JSXHint](https://github.com/STRML/JSXHint/)__ - lint your tings

---

## Resources
Ranked from 1-5 based on presumed react-experience, but all have been chosen for their approachability. Those in italics are particularly good.
#### Conceptual
* (1) _[React for stupid people](http://blog.andrewray.me/reactjs-for-stupid-people/)_ - A brief overview of what React is, along with its pros and cons.
* (2) _[Boiling react down to a few lines in jquery](http://hackflow.com/blog/2015/03/08/boiling-react-down-to-few-lines-in-jquery/)_ - A distillation of some fundamental concepts in react in an easy-to-digest form
* (2) _[The react way - getting started](http://blog.risingstack.com/the-react-way-getting-started-tutorial/)_ - A fairly long but well-written introduction to react.
#### Design Patterns
* (3) _[Container componenents](https://medium.com/@learnreact/container-components-c0e67432e005)_ - A great pattern for separating concerns between data-fetching and presentation.
* (3) _[Smart and dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)_ - A short article which outlines some good rules-of-thumb for implementing the pattern introduced in _Container components_.
#### Examples
* (3) _[React case study, pts.1 & 2](http://blog.krawaller.se/posts/a-react-js-case-study/)_ - A newcomer to React's comprehensively documented attempt to make a basic memory game. Pt.1 is the intial attempt with a number of errors - see if you can spot the problems before you move on to the next part. Pt.2 is the refactored, es-6, best-practice version (with input from a facebook dev). Make sure to read the comments on both.
#### Others
* _[React JSFiddle](http://jsfiddle.net/reactjs/69z2wepo/)_ - lets you play around with React in your browser
* _[React cheatsheet](http://ricostacruz.com/cheatsheets/react.html)_ - A good quick reference guide for concepts and syntax alike
* _[List of react resources](https://github.com/enaqx/awesome-react)_ - A fairly long, curated list of react/flux resources. A bit overwhelming at first, but really good when you get a bit more familiar with react.