---
template: post
title: Understanding ==, === and typeof in JavaScript
slug: 'understanding-typeof-in-js'
draft: false
date: '2018-10-08'
description: >-
    We all know that == and === are comparison operators in JavaScript, But == is the equality operator that converts the operands if they are not of the same type, before making the comparison. 
    
    While the === is called the Identity/strict equality which return true if the operands are strictly equal.

category: 'Deployment'
tags:
  - 'JavaScript'

---

We all know that == and === are comparison operators in JavaScript, But == is the equality operator that converts the operands if they are not of the same type, before making the comparison. While the === is called the Identity/strict equality which return true if the operands are strictly equal. i.e if they are of the same type and their values are the same.

The equality operator (==) compares only value of the variables.

```js
i.e var x = 20;
var y = 20;
console.log( x == y );
// Output: true. Because their value are the same
```

N.B: That == achieve the same thing as the === only if in a situation where they are of the same data type.
From the previous example var x and y are of the same data type number that’s why it seem as if we ignore the strictly equality (===).

```js
e.g 1. Var x1 = 30;
var x2 = “chisom”;
console.log(x1 == x2);
```

//Output: false. Because they have the of different data type, so in this situation == is not the a good operator to use.

```js
e.g 2. == can never replace ===, because it will try to convert (coerce) the values before doing the comparison, and in some cases will become something else.
var a = 5;
var c = “5”;
console.log (a == c);
```

//Output: true : because our variable c was coerce to a number 5, before checking if their values are the same which is now true.

## Reasons why you might want to used === other than ==

1. it’s safer to use === in many circumstances, and that if you're going to use it in some circumstances it's better to be consistent and use it for everything.

2. The thinking is that you can either think about whether to use == or === every time you check for equality, or you can just get into the habit of always writing ===.

3. Thirdly there’s hardly ever a reason for using == over === if you're comparing to true or false and you want coercion (e.g you want 0 or '' to evaluate to false) then just use if(! empty_str) rather than if(empty_str == false).

## Typeof operator

From MDN: “The typeof operator returns a string indicating the type of the unevaluated operand”.

### How is it used?

Since typeof is a unary operator, the operand follows the operator. No additional punctuation is required.
typeof 5 // “number”.
typeof “chisom” // “string”

The typeof operator is not a function. You can surround the operand with parentheses so that the expression looks like a function call, but the parentheses will simply act as a grouping operator. In fact you can decorate the operand with all manner of punctuation without derailing the operator.
e.g 
```js 
typeof (4) // “number”
typeof (2+3) //”number”
```

typeof is just not very discriminating. When typeof is applied to any object type other than Function, it returns “object”. It does not distinguish between generic objects and the other built-in types. you can check that from MDN
But this is where it failed us:

```js
//First type Checking works fine
var person = {
 getFirstName: function () {
 console.log(‘chisom’);
 }
};
if (typeof person === ‘object’) {
 person.getFirstName(); // this works fine just like our expectation
}
//Second type Checking throw an Exception..
var person = [];
if (typeof person === ‘object’) {
person.getFirstName(); //person.getFirstName is not a function
}
```
from the second part of the example you can see that the typeof has failed because we are trying to check if the person is a plain object which it isn’t.

## conclusion

Typeof operator is a bit strange. Unless you know how to really use it, simply avoid it to avoid headaches. and a simple way of looking at, it is by using Object.prototype.toString.call();
