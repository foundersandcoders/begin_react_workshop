## Begin React Workshop
Remember, `npm run dev`, and `localhost:8080`.

This is the dynamic version with state.

## The plan
We'll be making a 5-a-day tracker app, because we like pretending to be healthy (read: you). The aim of this app is to be able to add fruit items to a list and keep track of how many of those items you've eaten, as well as being able to search through and clear the list. And by 'fruit', I mean whatever you want.
With that in mind, we're going to want to break this app down into a number of distinct pieces of functionality. We want to be able to:

1. Add food items to a list.
2. Increment or decrement a counter for each food item.
3. Reset the items on the list.
4. Filter the items on the list with search terms.

Now that we know what functionality we want from the app, let's make a mockup of it in html. If you open up mockup.html in your browser, you'll see something like this:
![](/assets/img/App-Mockup.png)

Sweet. But there's one glaring problem.

There's no functionality; it's basically just a picture. We want it to be functional. Where do we go from here? We need to break this shiznit down into __components__.

## Thinking In React

![](/assets/img/App-Mockup-Components.png)

In case that diagram isn't clear enough for you, I got a friend to draw a diagram to show you whats up.
```
App
--Header
--List
----List item
--Footer
```

K, so at the top of the food-chain, we've got the __big green app__. This holds everything, and is the owner of every other component.
Directly nested within the big green app, we have three distinct components. These are outlined in that pretty sickly turquoise. These each do something different:
* __The header__ has an input and a button. You can see the input placeholder text as the title of the app, and the button as that little pokemon-card-style leaf. Basically, the header has two roles. Firstly, and formostenly (!??!!), it lets us type in the names of fruit, click the button and they get added to the list. Secondmostly, as we type in the names of fruit, it filters the list accordingly. Why do we need the filter? Why do you need to ask questions?
* __The list__ is just a holder for list items. Or is it? The list component actually generates the list items. It takes a bunch of data, and spits out a list item for every suitable chunk of data in there. Our app would be pretty cr-app without it (lmao).
  * __The list item__ is mental. Each one of these has its fruit-text, a little counter, and buttons that decrement and increment that counter respectively. Impressed? You should be. Oh yeah, this is outlined in yellow, and is owned by the list.
* __The footer__ is boring. In fact, the footer is so conscious of how boring it is that it spends its whole life wishing that those slightly-less-dull list items would just shrivel up and disappear. In case that wasn't clear enough for you, our footer holds a little button that clears all of the list items.
