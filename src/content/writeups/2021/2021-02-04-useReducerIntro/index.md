---
title: Intro to the useReducer Hook
date: 2021-02-04
published: true
slug: Understanding on how the useReducer API works and convention that make it powerful
---

\*\* Thanks to Kent C Dodds, for this workshop on useReducer.

## useReducer setup

The useReducer does well with managing multiple states that change together. The useReducer hook really excels when managing objects of state. Like a menu with sub-menus, only one menu should be open at once. The useReducer can set the open menu state.

userReducer is similar to redux as in managing state by passing in a reducer function that is a switch statement looking for an action to perform than updating the state. This is more of a convention, I think it would be good to determine where the line is draw between convention and the actual API

when the useReducer is called inside the component, the function requires two arguments. First, one is a function, referred to as a reducer function, and is where the state can be updated and then return. The reducer function also requires two arguments. First is the current state, the other would be what action to update the state. In fact, the second argument is often called "action".

Now the useReducer is deconstructed into an array. The first value is the state, the other is a function reducer function commonly referred to as the dispatch.

Below are code example on useReducer, the very useful and powerful useReducer.

### Passing the increment step prop as the action

```jsx
const [state,setState] = React.useReducer(reducerFunc, initialState)

const onClickHandler = () => setState(step) //action is an obj

...

...

function reducerFunc (state, action){
// allow the reducer update the state instead of inside the compoent
return state + step
}
```

### Passing the state as an Object, similar to the setState() in Classes

```jsx
const [state,setState] = React.useReducer(reducerFunc, initialState)

const onClickHandler = () => setState({count:count + step}) //action is an obj

...

...
// rewrite reducer to make it work

function reducerFunc (state,action){
// spread new state into previous state to maintain any properties,
// over write the properties that change
return ({...state, ...action})
}
```

### Continuation, but the setState is called with a function

```jsx
const [state,setState] = React.useReducer(reducerFunc, initialState)
//action is an func
const onClickHandler = () => setState({count: currentStaet.count + step})

...

...
// rewrite reducer to make it work
function reducerFunc (state,action){
// the use of a ternary to determine the what type the action is
return (
{
...state,
...(typeof action === "function" ? action(state) : action
})
}
```

### Common practice of switch statement and a dispatch object

```jsx

const [state, dispatch] = React.useReducer(reducerFunc, {
    count: initialCount,
  })

const {count} = state
  const increment = () => dispatch({ type: 'INCREMENT', step })
  const decrement = () => dispatch({ type: 'DECREMENT', step })

  return(
  <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
  </div>
)}

// redux convention

function reducerFunc (state, action){
switch(action.type):
	case "INCREMENT":
			return{state.count + action.step}
	case "DECREMENT":
			return{state.count - action.step}
	default:
			new Error(`action type of ${action.type} not supported`)
}
```
