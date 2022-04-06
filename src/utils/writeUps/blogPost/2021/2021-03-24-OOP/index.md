---
title: A overview of Object Oriented Programing
date: 2021-03-24
published: true
slug: A quick look into the programming paradigm of Object-Oriented. Object-Oriented Programming or OOP, is a process of structuring code. The closer, we as programmers capture these program design patterns, the code-base will be more manageable and easier for future engineers to make changes.
---

# Key Concepts for OOP

## what is it

A quick look into the programming paradigm of Object-Oriented. Object-Oriented Programming or OOP, is a process of structuring code. The closer, we as programmers capture these program design patterns, the code-base will be more manageable and easier for future engineers to make changes.

In OOP is working with objects. ok, that is obvious. How can we think about constructing these objects for your project? where would be a good fit and what are the major concept when working with OOP. One of the best ways to learn is relating the concept to something we are familiar with.

An example based on my work experience if I was to make a program that would record income analysis request. Every incoming request requires a name, previous model, weight, and purpose. The first instance would be using a primitive data structure (List, Dictionary, Tuple). This would work but would create difficulty to modify data. Which could lead to a complicated codebase. By using Classes we are able to create instances of the data and making the code more manageable and maintainable.

General simple example. ordering a burrito. You the customer are the calling the class of burrito with the items being the attributes for the creation of the class of burrito.

## Code Example

```

# Complicated and and static
my_burrito = {'meat':'chicken', 'bean':'black beans', 'sauce':'hot'}

# what type of meat for my order
print(my_burrito["meat"])

```

An example is not too bad if one or two but could get complicated as the program grows and more items are added.

```

# Python class serve as a blue print.

class  Burrito :
    def __init__(self,meat,bean,sauce):
        self.meat = meant
        self.bean = bean
        self.sauce = sauce

my_burrito  = Burrito('chicken','black beans','hot')

# what type of meat for my order
print(my_burrito.meat)

```

Technically more lines of code. But where we have more lines of code we make up for it ease of understanding and versatility. Since the class serves as a blueprint for a programmer, letting them know what is required for the instance.

This is just the start of OOP, and a lot more concepts and techniques to understand. Should have a general idea on classes and such. Next, we can look a bit more at the main concepts of OOP.

OOP Benefits

- Complex things simple and reproducible
- OOP Object can be modular and used across the program
- Easier to maintain and debug since classes contain all info pertaining to the object
- Protect info using the concept of encapsulation

## Main concepts

There are 4 main principles to follow when working in the OOP paradigm.

1. Encapsulation - storing data as a object withing a class and exposing specific data
2. Abstraction - using public methods for accessing an object
3. Inheritance - The ability to pass data from a parent classes into another.
4. Polymorphism - creating many methods that do the same task

**Encapsulation** is keeping the important/secret information inside the class and only exposing methods or properties that would need to accomplish a task. If accessible outside of the class would be referred to as Public or External Interface. I wanted to keep methods or properties from getting changed, which would be called a Private or Internal interface.

**Abstraction**, remove the complicated processes and supplies a simple interface. so any complicated logic to obtain the values that we are looking for has been abstracted away, resulting in a simple high-level external interface. Abstraction is simple to hide the logic just return and expose the answer. It doesn't matter how the task is completed just need the answer.

**Inheritance**, help keep code DRY (Don't Repeat Yourself). Say you have made a class and about to make another one that could share attributes or behaviors. Then it might be a good idea to place the common attribute in a general class and have the "child" class inherit those common attributes and define more specifically inside the "child" class.

**Polymorphism**, say we have a common method in the parent class and most of the time the method would be good to use. but when a child class inherits a method from a parent, but in the child class, we need to change the said method to do something a bit different. The method name would remain the same but would perform the action defined in the child instead of the parent. This would be referred to as _Method Overriding_. There is a technique called _Method Overloading_. Which would have methods would have multiple methods with the same name but with different number parameters. This concept is a little complex but the thing to remember is that when a method from a parent class doesn't quite match what needs to be done the method can be redefined in the child and still have the same outside interaction.

## Parts to create Class Objects

- class - is an abstract blueprint of an object
- Instance - is the object that is build from classes
- attribute - are items that are used to create the instance of the object,
- function called methods
- private variables : specifically used by class internally
- private methods : specifically used by class internally
- Initialization method for class

### Python

**def \init\(self,a,b):** --> Python dunder method, which initialize the object with the class attributes

### Javascript

**constructor(a,b){}** : JavaScript way of initializing the class object

- Inheritance

### Python

**class Child(Parent):** --> define a parent class on a child class
**super()** --> way of defining attributes from a parent class

### Javascript

**class Child extends Parent{}** --> JS defining a class that has a parent class
**super()** --> JavaScript way of defining attributes from a parent class

## Additional Resources

- Free CodeCamp, general OOP
  [How to explain object-oriented programming concepts to a 6-year-old](https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/)
- Educative, JavaScript examples, very detailed and very good
  [What is Object Oriented Programming? OOP Explained in Depth](https://www.educative.io/blog/object-oriented-programming)
- Real Python, Python examples
  [Object-Oriented Programming (OOP) in Python 3](https://realpython.com/python3-object-oriented-programming/#instantiate-an-object-in-python)
