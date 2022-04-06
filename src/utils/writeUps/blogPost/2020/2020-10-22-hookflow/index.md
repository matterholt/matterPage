---
title: Understanding how the the flow of hook work.
date: 2020-10-22
published: false
slug: If you are going to use a tool then it is best to learn how it works.
---

## Getting a better understanding on Hook Flow

_Thanks Kent C. Dodds for putting together epic react_

1. Lazy initializer -> those useState functions, first being mounted React

2. This continue to process the useState rest of the render functions

3. update of the DOM where to put the DIV

4. layout effect -> useEffect callback

5. react will stop, then the browsers will paint to screen

6. run useEffect, which everything has been painted

7. wait for user to trigger UPDATE something

8. Will not run the Lazy Initializers but will start the rendering process with useStates.

9. React update the DOM

10. react run the clean up layout effects

11. then React wil run the Update layoutEffects

12. Browser will update the screen

13. Then react will clean up the useEffect

14. React will run any new updates to useEffects

15. when Unmounted react will clean up the useLayout and useEffects
