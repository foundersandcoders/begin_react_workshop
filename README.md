## Begin React Workshop
Remember, `npm run dev`, and `localhost:8080`.

This is the es6 version along with some tests.

Extras:
`FruitAppContainer` seperate from `FruitApp` - This seperates data-management concerns from purely UI/layout concerns. `FruitApp` is now stateless, and is only charged with rendering parts of the UI in a particular way. `FruitAppContainer` has the state that `FruitApp` used to have, and manipulates the data, but no longer renders any UI - it just passes the data down to `FruitApp`. See the resources list for a more comprehensive explanation of the idea behind this.

ES6 features - `class` and `extends` rather than .createClass. This is the preferred syntax if using es6.

Further things to consider:
Those data-manipulation functions look like they can be extracted out of the component and stuck in some other file. How would you do this and where would you put the file?