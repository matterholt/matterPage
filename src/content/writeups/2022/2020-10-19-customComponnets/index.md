---
title: Creating Custom Components jsx and react
date: 2020-10-19
published: false
slug: Creating component and how they get processed in babel
---

## Creating Custom components

- In order to keep code dry crate a function that will return jsx. The function accepts an argument which is an object that is deconstructed and is place where content should be. such as children prop.

  ```js
  function Card({ children }) {
    return <div className="AwesomeCard">{children}</div>;
  }

  // remember it is JSX world

  <div className="container">
    {/* jsx world, {} steps into js world, able to call function and past argument*/}
    {Card({ children: 'Next Thing' })}
    {Card({ children: 'Other Thing' })}
    {Card({ children: 'Last Thing' })}
  </div>;
  ```

- For React.createElement(), will accept a function for the first argument, In turn would appear to have the same out come as calling the function directly, but with the function passed into the crateElement() API a component or DOM element is created.

  ```js
  //... continuation from code above
  <div className="container2">
    // will create component and element
    {React.createElement(Card, { children: 'react create Card' })}
    {React.createElement(Card, { children: 'Card will create component' })}
  </div>
  ```

- created function with a capital letter, then babel will recognize it jsx and process it like an element. Now it is feeling familiar to how we write react code.

  ```js
  //... continuation from code above
  <div className="container3">
    // will create component and element
    <Card>React create Card</Card>
  </div>
  ```

- using prop types to validate the props being past into a components.This feature will make code run slower so only used during development. The reason for doing this so that if anyone uses component in the future will not odd behavior and pass the correct props in to the component.

- react has prop-type npm package the react devs maintain [react prop-type](https://www.npmjs.com/package/prop-types)

  ```html
  <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
  ```

- .isRequired will process the props even if undefined

  ```js
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
  };
  ```

- React.Fragment is used when you don't want to have a parent div.

```html

<React.Fragment> NO DIV PARENT</React.Fragment>

<> syntax sugar for above example NO DIV PARENT</>

```
