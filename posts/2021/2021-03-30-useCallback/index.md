---
title: An overview of the hook called useCallback
date: 2021-03-30
published: false
slug: Understanding when and what the useCallback is all about
---

The useCallback hook is a function with dependencies. A similar idea of useEffect hook, as every time a dependency gets updated will execute the function. The hook can improve the performance of the app if the function is being called every render of the component. But this may not be true in every circumstance since react would need to keep track, in turn reducing the performance of the application.

        "(callback function) it's re-initialized every render, which means it's brand new every render, which means it changes every render, which means, you guessed it, our callback will be called every render!" -epic react, Kent C Dodds

If the useCallback is used improperly, then the amount of work the application would be doing is substantially increased. React would define the function of the useCallback, along with the dependency list. Then every render React would have to run through the logic to determine if the dependencies did update. There also may be an issue of more allocation for function definitions depending on how the useCallback gets implemented. Memory is also affected since the useCallback function would remain in the memory whereas without would have the function become garbage collected allowing to free up memory space.

## useMemo

Similar to useCallback but allows the developer to memoization to any value type. Like a list of values. To perform memorization we pass a function to the hook. which returns the value and the function is only called when value is needed.
'''js
const daysOfWeek = React.useMemo(
()=> ["mon","tues","wed","thurs","fri"],
[],
)
'''
The list would not be redefined every time a component is mounted. Again this hook should be used lightly since the performance benefits may not be as efficient as initially intended.

A good point to remember when optimizing code...

"Performance optimizations are not free. They ALWAYS come with a cost but do NOT always come with a benefit to offset that cost.

Therefore, optimize responsibly." -Kent C Dodds, [usememo-and-usecallback](https://kentcdodds.com/blog/usememo-and-usecallback)
