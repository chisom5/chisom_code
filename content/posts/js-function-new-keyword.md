---
template: post
title: The thing with JavaScript function and the new keyword
slug: 'js-function-new-keyword'
draft: false
date: '2018-01-13'
description: >-
    Functions are a collection of statement either named or unnamed that performs a task, and can be called from elsewhere within a JavaScript program

category: 'Deployment'
tags:
  - 'JavaScript'
  - 'Functional Programming'

---

This article was originally published by myself on [Codeburst](https://codeburst.io/the-thing-with-javascript-function-and-the-new-keyword-10dd0e3763e1)

![](https://res.cloudinary.com/chisom5/image/upload/v1618336882/function.jpg)

Functions are a collection of statement either named or unnamed that performs a task, and can be called from elsewhere within a JavaScript program.

Understanding functions as a building block of JavaScript application increases or promotes our functional programming style

## Function invocation

Invoking a function has a huge impact on how the code within it operates, and on how the ‘this’ parameter is established. When a function is invoked they are passed two implicit parameters: arguments and this. Which can be reference within the function just like any other named parameters, and the various ways by which we can invoke a function has something to do with the ‘this’ parameter relating to the function context.

There are four different ways to invoke a function which are:

- As a function, in which the function is invoked in a straightforward manner

- As a method, which ties the invocation to an object, enabling object-oriented programming

- As a constructor, in which a new object is brought into being

- Finally Via its apply() or call() methods, which is kind of complicated, so we’ll cover that when we get to it

The above four various ways in invoking a function differ base on how the value of ‘this’ determined for each type of invocation.

## Invoking a function as a Constructor and the ‘New’ keyword

The new keyword in JavaScript at first can be confusing, and people tends to think that JavaScript is not an object-oriented Programming.

At a close look, this is what the new keyword does:

- It create a new object and the type of this object is simply 

- It set this new object’s internal, inaccessible (prototype) property to be the constructor function’s external accessible prototype objects (Since every function object automatically has a prototype property).

- It makes the ‘this’ variable point to the newly created object

- It execute the constructor function using the newly created object whenever ‘this’ is mentioned

- It returns the newly created object unless the constructor function returns a non- null object reference.

### “Invoking a function as a constructor has a powerful feature of JavaScript because when a constructor is invoke using the new keyword we have the following”

- A new empty object is created

- The object is passed to the constructor as the ‘this’ parameter and thus becomes the constructor’s function context

- Finally in the absence of any return value, the new object is returned as the constructor’s value.

```js
E.g function Greetings () {
this.name = function () {
return this;
};
}
var greet1 = new Greetings ();
var greet2 = new Greetings ();
Console.log(greet1.name() );
The result will be an object of Greetings.
// Greetings {name: ƒ}

```
## Explanation

When the function Greetings is invoke an empty object is created and passed as the ‘this’ parameter which makes our function context as the empty object, then it execute the this.name = function() {return this;} code property and add it as a property of the newly created object which is reference by greet1 and greet2, since the code property is a method on the newly created object, it can be called as a method of that object.

Finally our method executes and returns the ‘this’ as the object and store it in our var greet; which when we console.log (greet1.name()); gives us an object of Greetings.

N.B: JavaScript has built-in constructor for native objects, i.e it has an object version of JavaScript primitive data types

```js
e.g var x = new String();
var foo = new Number ();
var a = new Boolean ();
```
So with all the usefulness of new and it’s importance it is not adviceable to use the new keyword in creating any primitive data types rather use their pattern literal. i.e

```js
var x = “ ”;
var foo = 2;
var a = true; //or false;
```

## Conclusion

Generally there are naming convection that distinguishes our normal or regular function from function constructors.

For function and methods they can be identify as names starting with a verb that describe what they do, with lowercase e.g creep(), doSomething(); while constructors on the other hand are usually named as a noun that describe the object that’s being constructed, starting with an uppercase character.

With a thorough understanding on function constructor and the new keyword, we can see how we can create multiple objects that conform to the same pattern without having to repeat the same code over and over again.