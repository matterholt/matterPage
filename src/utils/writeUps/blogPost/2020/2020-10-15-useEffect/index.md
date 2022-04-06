---
title: Intro to useEffect Hook
date: 2020-10-15
published: true
slug: checking out useEffect and extracting logic out in to a custom hook
---

## useEffect

### Quick while going through contents

1. Applications will side effects need to access the outside world, and don't want it to do in side the render function

2. useEffect allow the dev to run custom code after the component has rendered will execute after the component is rendered

3. useEffect provides a call back that react can execute once the the DOM has updated.

## Extra 1 Lazy State Initialization

Typically the initial state is just past in to the useState. So every time the component function is called the useState that is an expensive computation will be executed and could cause reduction in performance.

To keep the useState from calling every time the component is called, React useState allows us to pass a function instead of the the actual value. This would get the the value only once when the component is rendered the first time.

To view the concept use the code below

```js
function Greeting({ initValue = '' }) {
  //every time the input changes component get rendered
  console.log('component get rendered');

  function getInitValue() {
    // only called when the component first gets rendered
    console.log('values get called');
    return window.localStorage.getItem('name' || initialName);
  }

  const [values, setValues] = useState(getInitValue);

  // inline and cleaner example
  // const [values, setValues] = useState(()=>window.localStorage.getItem("name" || initialName));

  // Previously
  //const [values, setValues] = useState(window.localStorage.getItem("name" || initialName));

  return (
    <div>
      <form>
        <label htmlFor="testValue">Values:</label>
        <input
          id={testValue}
          value={values}
          onChange={(e) => {
            setValues(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
```

Even through creating a function is cheep. If there is not a need for it then we should just pass a value straight into the useState. which is even cheeper then making a function. Won't use the Lazy State Initialization a lot but if need to check if something is in local storage or some other expensive calculations the it may be beneficial to use.

## Effect Dependency

The useEffect will run every render and re-render. Which could be what is desired but react could be re-render for reason to which we do not wish. Such as an update on the parent component will cause the parent and children to re-rendered. So it is best to add dependencies to useEffect and this would restrain useEffect to be executed if any of the dependencies are updated or changed. Use the eslint rule and you will be in good shape.

- second argument called the "dependency array"
- the array can be any length
- The array should include everything that can change
- when array is empty wil only run once
- If no dependency array will run every update
- react shallow comparison, so when adding objects will update
- ?? with adding the update function on useState in to the dependency array

## Custom Hook

Extracting a function that could be useful other places it can be defined as a custom hook. the make it.

- what make it a custom hook is that it uses other hook inside the function.
- The 'use' suffix allow some eslint rule to build on

### Making Hook flexible

Other coding that are captured during this session

- Passing functional options, The way that was shown is deconstruct an object with defaults. So with as with saving data to local storage set a serialize and deserialize option.

- Use case 1, If the state is computationally expensive to make. Then the there is an option to make a default value optionally a function. Don't want to compute it every re-render -- Not completely grasp concept.

- Use case 2, If want to change the local storage key. we would want to track what the previous key and compare it to the the incoming key. Then if they don't equal each other then can be updated. Using useRef to keep track of the storage key. useRef will return an object that can be mutated without triggering a re-render of component.
