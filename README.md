## Begin React Workshop

So, today we're gonna learn some react.
We're gonna start by introducing you to the concepts in React by incrementally making a few components, and then after lunch, we'll build a basic app to entrench these concepts, consolidate what we've learned, learn some best practices, and generally try to fix most of the things wrong with the world today.

## Setup

```
git clone https://github.com/foundersandcoders/begin_react_workshop.git
cd begin_react_workshop
npm install
git checkout [see branches below]
```
Now you're all installed, there's one more step you may need to take. To get developing, you'll need `src/js` and `build/js` folders. In the `src/js` folder, you'll need a file called `main.jsx`. That'll be your starting point. Once you've got those, in the terminal, type:
```
npm run dev
```
Open a browser of your choice and navigate to `localhost:8080`, and hopefully you'll see nothing there. What an anticlimax, but I'm still proud of you all.  

To get started, `git checkout babysteps`.

n.b. if you get an EADDIRINUSE error, change the `live-reload` port in your package.json and in your `index.html`.

## Branches
We'll be checking out regularly through the day, so on this branch you'll have a reference point:  
* __Master__ - Landing branch  
* __babysteps__ - First steps branch  
* __babystepsA__ - Running code for the final part of first steps  
* __appmockup__ - The mockup for the app. Just HTML  
* __appstatic__ - The static, non-interactive version of the app  
* __appcomplete__ - The dynamic version of the app  

## Scripts
There are a set of development scripts in the package.json for your use:
* __`npm run build`__ - Lint your jsx, and build your jsx from src to build
* __`npm run dev`__ - Build and serve your project at port 8080, with incremental building on src files changing, and auto-refresh on build
* __`npm run lint`__ - Lint your jsx


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
