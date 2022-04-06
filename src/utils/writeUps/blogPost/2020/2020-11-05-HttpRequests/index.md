---
title: Fetching HTTP request data on useEffect
date: 2020-11-05
published: true
slug: Data helps move and create the app, Let explore how to get thing going in React
---

## NOTES

- Any time the app need to perform a side-effect, then it will be executed within a useEffect hook.

- This hook allows us to ensure that whenever certain changes take place, we apply the side-effects based on those changes. -Kent c dodds

- useEffect can not return anything but a clean up function, This is why a use effect can not be an async function since it returns a promise

- when fetching, If the variable has not change then there is no need to send request. So if we have a return before the fetch of the request then wil save us time to fetch data to the API

## Extra credit 1

- To control what get render is a bunch of if , else if statements to determine what gets passed in to the child component. depends on if things exist or not.

- Displaying a failure of a fetch request is handled in similar fashion, we have state that results in null and once the fetch is cast then if it return an error will update and render the display letting the user know what is going on

- also adding a role to 'alert' would make the screen readers read it first letting the user know what is going on with the request

## Extra credit 2 -> Set app status state

- Currently all state are all thrown in together. There is sate for the pokemon data then the next line we have state that control what get rendered to the screen.

- Base what gets render on current status of the app instead of what actual state being fetch,error, idled

- Having a status state, and letting it control what gets rendered to the screen. It remove resetting the state's to null when there is an error.

- by using a status display, reduces the bugs and allow explicitly explaining what is going on, so would be easy to remember what you are doing with the app.

- Create app closer to state machine like x-state.

- Extra Reading [stop-using-isloading-booleans](https://kentcdodds.com/blog/stop-using-isloading-booleans)

- As a creator of something reusable, it's always easier to make it so people can't do the wrong thing even if they want to. ~ Kent C. Dodds

## Extra Credit 3 -> Placing All state In one Object

- issue to solve => currently the app state depends on when the state gets set, If they are out of order then could be have some bugs. (Concurrent Model in React => if it could wait till a few seconds till the data is retrieve could work.

- Each time the sate is changed then would trigger a re-render of the component. When state is not called in the correct order the component get re-render before the pokemon data state to be retrieve. Therefore causing an bug in the app.

- when putting the state in an Object the process getting called would remove since. Setting the state of the component at one point.

```js
// currently state set up, Order of state change will matter
const [status, setStatus] = React.useState("idle");
const [fetchPokeData, setFetchPokeData] = React.useState(null);
const [errorMsg, setErrorMsg] = React.useState(null);

//  improved method, Only focus on changing data through on state call
const [state, setState] ={
    React.useState(
        status: "idle",
        fetchPokeData:null,
        errorMsg:null,
        })
```

- all updates to state are done with one state handler. Whatever gets past into the state at the current time is exactly what the state will be at the next render

- one possible problem is that when the state is update then the state is new / wiped clean. (Don't mutate state directly). Unless the current state is copied in the function and then can be spread back into the setState

## Extra Credit 4 ->Error boundaries

- It would be better to show the error then have the white screen, Errors shouldn't break the whole website, React 16 introduces a new concept of an “error boundary”. Manage all errors in component tree.

- ErrorBoundary, is a special component, and is needed to be written in class form, will return children and be a wrapper.

- requires a property called `js static getDerivedStateFromError (error)` then can return an object of how state will look

- Error boundaries are react components and can catch JS errors any where in their child component tree, log those errors and displace the fallback UI

- Error boundaries do not catch errors but help display errors to the user, so the is not a chance for a white screen.

- Putting the error boundary around the part that would make the best place to help show what the error is. Don't want to wrap the whole thing since it would re-render everything.

- There needs to be away to get the error boundary component to reset it's self. The work around is to add a unique key that can be controlled by useState. This would re-render the component with the initial state.

## Extra Credit 6 -> Error Boundary Library

[react-error-boundary library](https://www.npmjs.com/package/react-error-boundary)

- No need to write classes when there is library that takes care of all the errors. called react-error-boundary. and there

- since it is an outside lib then requires to have the correct prop name to get passed into the 'outside' component

## Extra Credit 7 -> Remounting of comp

- The Error boundary component is getting unmounted when the key change therefore the children are getting unmounted. So it is work through the component and have the defaults displayed

- The "hack" to get it to work is to add a turnery to the status, getting the correct component to get rendered. But will still spend a render

- Library provides a few options one of which is `js resetErrorBoundary `. but this only umount the errorBoundary component. but to make most user friendly would require a reset handler, and would need to have a onReset prop. Now would not require a key prop.

## Extra Credit 8 -> Reset key props

- Removing the error handling out to the component. removes some functionality of the app ( can't click on pokemon name and have it updated)

- errorBoundary component accepts a reset key. This prop will re-render the errorBoundary's children again when the key provided changes with the updated state.
