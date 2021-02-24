---
title: Interacting with DOM through React
date: 2020-11-05
published: true
slug: useRef and useEffect to get access to the DOM
---

## NOTES

- Writing in JSX could be easy to forget that they are not real elements and have not really been created til the render method has been executed.

- To reference or work with a element that has not been created in the DOM, React gives us a useRef hook.

- useRef will give us access to the the DOM element once it is 'mounted'. If we need to execute something after the component get render then useEffect is our hook to use

- useRef is just a JavaScript Object, Persist through the whole life of component, Doesn't notify when content has change (mutating the current does not re-render)

- Let React handle creation and mounting of the DOM nodes then pass the ref DOM element to the library that need to work with the DOM element.

- Since we are interacting directly with the DOM, that would require us to remove it once the component is done, or clean up the DOM elements.

- Any interaction with a DOM node is a side effect.

- useRef when maintain a reference to node and not trigger a re-render
