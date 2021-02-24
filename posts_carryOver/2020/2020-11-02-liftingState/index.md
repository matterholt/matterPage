---
title: Lifting State
date: 2020-11-02
published: true
slug: Concepts where contained through Kent's explanation of how React lifts up state
---

## Lifting State

React Lifting up state, what does this mean exactly? Lifting State is the way we explain sharing state among components. So the first we locate least common parent, depends a lot on where and what needs the state prop. For the example it would be the App component. This isn't to say that is where the state should live but for an examples and learning is most likely the bottom.

To get a image, visualize a tree the app component would be the first slit in a tree. All other 'branches' have grown from that point on would be consider children. Then wold have to figure out the best place to have the state be controlled.Once we place the state closer to the 'first split' components that follow would be able to have the state be passed as a property. But too far down in the tree would have to require to pass a lot of props through components to the desired place.

## State Colocate

Is that act of keeping state as close as where it is relevant. This is tied to the the idea above where we don't want to just place the state at the bottom most parent component. If the state is not evaluated and state is left with in a parent component then could suffer some performance issue but mostly could cause maintainability issues as well. when requirements have change and state was not needed in a parent the evaluate if the state can be moved a child component. Removing the state that is not needed would remove a re-render when that state would change.
