---
title: Python Data Structures
date: 02-30-2020
writtenBy: MAtterholt
description: Overview of Python Data Structures
---

## List

The all might list simple and are used everywhere. or at least in my code. I have about 8 things that have should be known about the humble default data structure call list

- In Python code are indicated by the square bracket and can be declared by a = [ ] or created by list()

- There is no limit to what you can store in the list or what data type that can be placed with in the brackets. examples = [1, 2, 3, 'a', 'b', 'c', [5, 5, 5], {A:"test"} ]

- List are mutable, in layman's term able to remove, delete, to be able to change the original list.

- To access any item in a list would have to loop through this list or if there is value position is known the could select the index, but then maybe another data structure would be better.

- Having some knowledge in JavaScript and other programing language call it an Array and has similar behaviors.

- Python provides some built in method to help work with list. .sort() -> if items are all same type, .append() -> add an item to the end of list, .pop() -> remove last item in list, .remove() -> remove first item in list, .insert() -> which will place item in the desire index position. There are handful more https://docs.python.org/3/tutorial/datastructures.html

- Stacks which is last in, first out. The Data structure is found in Redo-undo feature, forward and backward in web browsers. Then there Algorithms such as Tower of Hanoi, and tree Traveral (Future me look in to). Rat in a maze and sudoku solver. any Backtracking problems
  (example of at the end)

- list and be implemented as queues as well. where the first thing in is the last thing out.(more research on subject)

- list Comprehensions which is another what of creating list and would make reduce code if for loop and append() is need. below would return a list with x squared. oppose to having a for loop and for each item , square it and append to list.

```.py
 a =[x**2 for x in range(10)]
```

- Nested list, require more research on my part. The Python doc's show a matrix which i feel would be be better to use numpy to tackle any matrix problems

```.py
# Short research on Stack
from sys import maxsize

def create_Stack():
    stack = []
    return stack

def is_empty(stack):
    return len(stack) == 0

def push(stack, item):
    stack.append(item)
    print(f" ${item} pushed to stack")

def pop(stack):
    if is_empty(stack):
        return str(-maxsize -1)

    return stack.pop()

def peek(stack):
    if is_empty(stack):
        return str(-maxsize -1)

    return stack[len(stack) -1]

```
