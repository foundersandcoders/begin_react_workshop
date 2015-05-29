## Begin React Workshop

So, today we're gonna learn some react.
We're gonna start by introducing you to the concepts in React by incrementally making a few components, and then after lunch, we'll build a basic app to entrench these concepts, consolidate what we've learned, learn some best practices, and generally try to fix most of the things wrong with the world today.

## Setup

```
git clone begin-react-workshop
cd begin-react-workshop
npm install
git checkout babysteps
```
Now you're all installed and good to go. Before we go any further, open up the `package.json` file. __{explain package.json briefly}__. So now to run our development scripts, in our terminal, type:
```
npm run dev
```
Open a browser of your choice and navigate to `localhost:8080`, and hopefully you'll see nothing there. What an anticlimax, but I'm still proud of you all.

## Branches
__Master__ - Setup branch
__babysteps__ - First steps branch
__babystepsA__ - Running code for the final part of first steps
__AppMockup__ - The mockup for the app. Just HTML
__AppStatic__ - The static, non-interactive version of the app
__AppComplete__ - The dynamic version of the app

## Scripts
There are a set of development scripts in the package.json for your use:
__npm run build__ - Lint your jsx, and build your jsx from src to build
__npm run dev__ - Build and serve your project at port 8080, with incremental building on src files changing, and auto-refresh on build
__npm run lint__ - Lint your jsx