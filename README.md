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
Now you're all installed and good to go. To get developing, you'll need `src/js` and `build/js` folders. In the terminal, type:
```
npm run dev
```
Open a browser of your choice and navigate to `localhost:8080`, and hopefully you'll see nothing there. What an anticlimax, but I'm still proud of you all.  

To get started, `git checkout babysteps`.

## Branches
We'll be checking out regularly through the day, so on this branch you'll have a reference point:  
* __Master__ - Landing branch  
* __babysteps__ - First steps branch  
* __babystepsA__ - Running code for the final part of first steps  
* __AppMockup__ - The mockup for the app. Just HTML  
* __AppStatic__ - The static, non-interactive version of the app  
* __AppComplete__ - The dynamic version of the app  

## Scripts
There are a set of development scripts in the package.json for your use:
* __`npm run build`__ - Lint your jsx, and build your jsx from src to build
* __`npm run dev`__ - Build and serve your project at port 8080, with incremental building on src files changing, and auto-refresh on build
* __`npm run lint`__ - Lint your jsx
