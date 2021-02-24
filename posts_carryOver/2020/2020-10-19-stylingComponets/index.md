## Styling components

- To give a component a styles there are two ways to assign style to the component first is `className` the other is inline and is created by the `style ={{}}` where camelCase properties are defined in an Object.

- JSX focuses on property names oppose to html attributes

- The HTML class attribute for the styles is converted in the DOM as className. which is not React specific.

- For the Style the DOM there is CSSStyleDeclaration, which contains an Object with all styles that can be applied.

- to pass css props into a component, If using className not to over write css properties would have to enter JS and have to enter the value in Template literals. Then the css props from the child can be added the the className.In order to not write over the inline styles of the parent. The children css props would be spread in to the object. inline the order of css properties do matter, so be careful not to over write.

- Styling component are a implementation detail and provides a few option to child.

- BONUS, a technique I was unaware of.

  ```js
  // how I passed children into a comp
  const ParentComp = ({ children, classProps }) => {
    return <div className="classProps">{children}</div>;
  };

  // how I should be writing them
  const betterParentComp = ({ classProps, ...otherProps }) => {
    <div className="classProps" {...otherProps} />;
  };
  ```
