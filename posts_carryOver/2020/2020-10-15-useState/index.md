---
title: Intro to useState Hook
date: 2020-10-15
published: true
slug: State it's a big deal, The hook that controls State in React
---

## UseState hook

hold the current state of the page

### Quick while going through contents

1. allows react component to store data or perform action

2. useState will return a pair value to which we will deconstruct, first value is current sate and the second is a function to update the state

3. State is data changed over time, such as a onChange on input or onClick for a button.

4. The function return from the useState is the updater and commonly will have a prefix of set. Each time the set function is called that will cause React to re-render the component and what ever value passed in the the update state function will be the current state.

5. When passing props, to a child we don't want a value to be switching from controlled to uncontrolled so to prevent the state to have an 'undefined' could have a default value as an argument for the function
