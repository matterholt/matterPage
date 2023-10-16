---
title: Jsx What and How
date: 2020-10-19
published: true
slug: Taking a look at JS
---

## Adding JSX for building Rect Components

Creating DOM elements get us closer to the building the components. But writing them all wil `React.createElement()` api could be complicated and repetitive. So in comes a JSX, It is a HTML-like syntactic sugar. It is not HTML and not JavaScript Could be thought as a template language in js.

To get right in it below is a snippet a creation of a component in react. Looks pretty similar except for the what would look like HTML tag in the JavaScript code. HTML does not exist in js. If we think about the items to the left of the ' = ' should either be a string or variable that reference something and could be a function as well. but the what we have is open bracket it a HTML tag name a some stings and some word with a close tag. It has a bit of everything.

```js
// Element being constructed with JSX
const uiElement = <p id="contain"> The quick fox</p>; //JSX

// Essentially what the above code gets compiled to
const uiElement = React.createElement('p', {
  id: 'contain',
  children: 'The quick fox',
}); // compiled version
```

JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. JSX is a syntax extension to JavaScript, Embedding Expressions,an Expression,Specify Attributes, Specify Children, Prevents Injection Attacks, Represents Objects,

JSX is not JS so there is need to have it compiled to allow React API build the DOM elements. Enters Babel, where Babel looks for the open and close brackets and anything in side would be considered JSX and therefore would need to be compiled. This is why every tag has to have a closing of the tag.

To get playing around with the concept we are able to add a script tag to the HTML file. That can compile the file on the fly with Babel. In the browser at the head there will be a script tag that will have our compiled react code specificity JSX

script below is what gets added to the index.html file to allow JSX to be compiled before that paint to the screen. The script type is set to "text/babel" which the browser will skip over and babel will see that it and compile the code for the browser to read.

```html
<!-- index.html script tag in the head -->
<script src="https://unpkg.com/@babel/standalone@7.9.3/babel.js"></script>


<!-- index.html script tag in the body , let browser will not process til babel compiles it, with correct type -->
  <script type="text/babel">
  // NOT FOR PRODUCTION
  <script>


```

Babel has a repl that can check out how jsx gets compiled down to..
[jsx babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=usage&spec=false&loose=false&code_lz=MYewdgzgLgBArgSxgXhgHgCYIG4D40QAOAhmLgBICmANtSGgPRGm7rNkDqIATtRo-3wMseAFBA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=true&targets=&version=7.11.6&externalPlugins=)

With JSX we are able to write the HTML tag that we wish to create without the need to structure the React.createElement(). This let's our code base to be be cleaner and easier for other people to know what is going on.
