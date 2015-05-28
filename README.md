## Starting Out
### 1. Components
### 2. Flow of Data
### 3. Props
### 4. State

## Part 1: Planning the App

## Part 2: Static React Version

## Part 3: Dynamic React Version

## Extras

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

## Resources
Ranked from 1-5 based on presumed react-experience, but all have been chosen for their approachability. Those in italics are particularly good.
#### Conceptual
* (1) _[React for stupid people](http://blog.andrewray.me/reactjs-for-stupid-people/)_ - A brief overview of what React is, along with its pros and cons.
* (2) _[Boiling react down to a few lines in jquery](http://hackflow.com/blog/2015/03/08/boiling-react-down-to-few-lines-in-jquery/)_ - A distillation of some fundamental concepts in react in an easy-to-digest form
* (2) _[The react way - getting started](http://blog.risingstack.com/the-react-way-getting-started-tutorial/)_ - A fairly long but well-written introduction to react.
#### Design Patterns
* (3) [Container componenents](https://medium.com/@learnreact/container-components-c0e67432e005) - A great pattern for separating concerns between data-fetching and presentation.
* (3) [Smart and dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) - A short article which outlines some good rules-of-thumb for implementing the pattern introduced in _Container components_.
#### Examples
* (3) [React case study, pts.1 & 2](http://blog.krawaller.se/posts/a-react-js-case-study/) - A newcomer to React's comprehensively documented attempt to make a basic memory game. Pt.1 is the intial attempt with a number of errors - see if you can spot the problems before you move on to the next part. Pt.2 is the refactored, es-6, best-practice version (with input from a facebook dev). Make sure to read the comments on both.

