## Begin React Workshop
Remember, `npm run dev`, and `localhost:8080`.

## Dynamic Children
We can map over elements and generate elements or components. They must be in an array though:

```js
var React = require("react");

var ListItem = React.createClass({
  render: function() {
    <li>{this.props.content}</li>
  }
});

module.exports = ListItem;


var ListHolder = React.createClass({
  getInitialState: function() {
    return {
      arrayOfData: ["hi", "how", "are", "you"]
    }
  },

  render: function() {
    var arrayOfComponents = this.state.arrayOfData.map(function(e,i) {
      return (
        <ListItem key={i} content={e} />
      );
    });

    return (
      <ul>
        {arrayOfComponents}
      </ul>
    );
  }
});


React.render(
  <ListHolder />
  document.getElementById("content")
);
```
We also want to give those mapped-over components a unique `key` attribute. This is so that if the children are shuffled about, reordered or something else dynamic happens, React can reconcile them efficiently. One way to think of this is as a unique identifier for each element returned from our iteration. It is generally advisable to use the current index of the item as `key`.

---
## Lifecycle Events

#### Mounting: [componentWillMount](https://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount)

`componentWillMount()`

> Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call `setState` within this method, `render()` will see the updated state and will be executed only once despite the state change.

#### Mounting: [componentDidMount](https://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount)

`componentDidMount()`

> Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. At this point in the lifecycle, the component has a DOM representation which you can access via `React.findDOMNode(this) [React 0.13+]` or `this.getDOMNode() [React 0.12.x]`.
>
> If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method.

#### Updating: [componentWillReceiveProps](https://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops)

`componentWillReceiveProps(object nextProps)`

> Invoked when a component is receiving new props. This method is not called for the initial render.
>
> Use this as an opportunity to react to a prop transition before `render()` is called by updating the state using `this.setState()`. The old props can be accessed via `this.props`. Calling `this.setState()` within this function will not trigger an additional render.
>
>  **NOTE:**
> There is no analogous method `componentWillReceiveState`. An incoming prop transition may cause a state change, but the opposite is not true. If you need to perform operations in response to a state change, use `componentWillUpdate`.

#### Updating: shouldComponentUpdate

`boolean shouldComponentUpdate(object nextProps, object nextState)`

> Invoked before rendering when new props or state are being received. This method is not called for the initial render or when `forceUpdate` is used.
>
> Use this as an opportunity to `return false` when you're certain that the transition to the new props and state will not require a component update.
>
> If `shouldComponentUpdate` `returns` `false`, then `render()` will be completely skipped until the next state change. (In addition, `componentWillUpdate` and `componentDidUpdate` will not be called.)
>
> By default, `shouldComponentUpdate` always `returns` `true` to prevent subtle bugs when state is mutated in place, but if you are careful to always treat state as immutable and to read only from props and state in `render()` then you can override `shouldComponentUpdate` with an implementation that compares the old props and state to their replacements.
>
> If performance is a bottleneck, especially with dozens or hundreds of components, use `shouldComponentUpdate` to speed up your app.

#### Updating: [componentWillUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-componentwillupdate)

`componentWillUpdate(object nextProps, object nextState)`

> Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.
>
> Use this as an opportunity to perform preparation before an update occurs.
>
> **Note:**
> You cannot use `this.setState()` in this method. If you need to update state in response to a prop change, use `componentWillReceiveProps` instead.

#### Updating: [componentDidUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate)

`componentDidUpdate(object prevProps, object prevState)`

> Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.
>
> Use this as an opportunity to operate on the DOM when the component has been updated.

#### Unmounting: [componentWillUnmount](https://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount)

`componentWillUnmount()`

> Invoked immediately before a component is unmounted from the DOM.
>
> Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.

---
## Refs

> React supports a very special property that you can attach to any component that is output from render(). This special property allows you to refer to the corresponding backing instance of anything returned from render(). It is always guaranteed to be the proper instance, at any point in time.

Refs are a way to get access to component instances returned from render - like IDs but for components. They're accessed through `this.refs.refNameGoesHere` and we can find the respective DOM node through `React.findDOMNode(this.refs.refNameGoesHere):

```js
var React = require("react");

var RefExample = React.createClass({
  componentDidMount: function() {
    console.log(this.refs.someOtherRef);
    console.log(React.findDOMNode(this.refs.textinput).value);
  },

  render: function() {
    return (
      <div>
        <SomeOtherComponent ref="someOtherRef" />
        <input type="text" value="hello" />
      </div>
    );
  }
});

```

---
## Forms
There are two styles of dealing with forms in react, depending on what you want to happen. The first style is using __uncontrolled components__:
```js
var uncontrolledFormComponent = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var textInputValue = React.findDOMNode(this.refs.textInput).value;
    doSomethingElse(textInputValue);
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" defaultValue="Hello!" ref="textInput" />
        <input type="button" onSubmit={this.handleSubmit}/>
      </form>
    );
  }
});
```

The second is using __controlled components__:
```js
var controlledFormComponent = React.createClass({
  getInitialState: function() {
    return {value: "Hi!"};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return <input type="text" value={value} onChange={this.handleChange} />;
  }
});
```

---