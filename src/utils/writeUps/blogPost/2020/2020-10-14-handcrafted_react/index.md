---
title: writing react elements
date: 2020-10-14
published: true
slug: Working on the low level of react by hand crafting react elements.
---

The first step in becoming an Epic React Developer is to understand how react build element to the DOM. To get thing up an running does not require a lot. Thanks to unpkg we able to add a script at the head of a HTML file and will allow us work with the React lower level API.

```html
<!-- index.html script tag in the head -->
<script src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>

<script src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
```

so why are there 2 script tags? React is not only for the web there is also native and VR. So we have the core react, where we can create the element and create state. The other is specifically for rendering our code to the DOM.

Let's create some element. Just like anytime we are using JS to create DOM elements requires a element to append our elements so a div element with the id of 'root'. A similar pattern if ever worked with React.

The API we will create element with is `React.createElement()`. yeah clean code at it's finest. The function need more to create the element so the first argument is going would be the element type followed by an Object for the props, like css className, children element, state and any other data that the component should be aware of. In the end would look something like such

```js
const elemType = "h1";
const elemProp = { children: "Hello World", className: "container" };
const reactComp = React.createElement(elemType, elemProp);
// to view what react makes for the DOM
console.log(reactComp);

// the compact way
const reactCompCompact = React.createElement('h1',{{ children: "Hello World", className: "container" })
```

Finally the render to the screen. which requires the element that is created and where react is going to paint it in the DOM.

```js
ReactDOM.render(element, DOMId);
```

Fairly simple but code is not normally this easy. Without getting too deep and complicated, how would you render a component with multiple children. I'll show you

```js
const extraCreditRoot = document.getElementById('extraCredit');
const nestedElem = React.createElement(
  'div',
  {
    children: [React.createElement('h2', null, 'Hello'), React.createElement('h3', null, 'Nested'), React.createElement('h4', null, 'Element')],
    className: 'container',
  }
  // "Uncomment this section and a string will generate in the DOM"
);
ReactDOM.render(nestedElem, extraCreditRoot);
```

Very tedious and not very practical when building a large application but here is what been compiled every component that is created in React. well kind of, there is another helper we get when crating components. That is JSX and sure enough we are going to talk about it

Inspired and knowledge is build form Kent C. Dodds Epic React Workshops. exercise-2
