---
title: Building custom hooks
date: 2020-10-22
published: true
slug: Thinking about how we can extract logic out of the rendering and opening up the possibility to use it other places.
---

## Process to make custom hooks

How can we make the hook able to work with multiple values and keys, with save to local storage and things. The example is working with local storage. Working with local storage is could be pretty help full in other places.

1. Fist make the full working logic within the component. Keeping the thought process on the specific problem that is trying to be solved. ie save the data to local Storage.

2. Once the function is working exactly. Take the section of logic into it's own "global" function. For React the function would be place in a custom useHook, to allow all the React goodies to come along. DON'T change a thing about the code, Current task is to remove the function and get it working as it should.

3. Variables will not be in scope of the new function and will have to be passed in as parameters.

4. The next thing could be generalizing the variables name inside the custom hook. Keeping the variables name general and geared to how the function works.

5. Look for anything that is static that defines the action that is being executed. such as a key value that defines local storage. Then make those parameters and can be determined by the parent component.
