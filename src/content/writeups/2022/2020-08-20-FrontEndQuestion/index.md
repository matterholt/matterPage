---
title: FrontEnd Technical Questions
date: 2020-08-20
published: false
slug: common question asked
---

1. Explain event delegation.

   - allow devs to apply event listeners to the parent instead of each child. This called bubbling. why is this good? well if any children are added to the parent, we are able to avoid writing another event listener for that specific child and needing to change code in other places. Also each Event listener is an object and takes up space and can slow down the browser.

   [code example](https://codepen.io/Matterholt/pen/VwaKJzp)

2.
