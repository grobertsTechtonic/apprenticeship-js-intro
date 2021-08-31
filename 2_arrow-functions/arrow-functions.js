/*
  ARROW FUNCTIONS

  Arrow functions are a newly implemented feature released with es6.  Their main benefit is that they are more succinct and can also be nameless if we only need to use them once.  There are a few use cases where arrow functions may become problematic, and we will take a look at those issues in a few moments.
*/

// Example
var add = (x, y) => {
  var sum = x + y;
  return sum;
}

// 1. Let's rewrite our subtraction function from the last section as an arrow function.

function subtract(x, y) {
  var diff = x - y;
  return diff;
}

/* 
One of the biggest benefits of arrow functions is that we don't have to name every function if we don't expect to use it again.  This frees up memory space.
We will first look at an example and then write our own nameless function.

 - Higher Order functions: A function that can accept another function as an argument or returns another function.  These are not available in many programming languages, but javascript makes extensive use of these tools.
*/

// Example
var addOne = (arr) => {
  var res = arr.map((num) => {
    return num + 1;
  });

  return res;
};

/*
  Array.map is a prebuilt function in javascript.  It accepts an array and returns a new array based on it's arguments.  The most basic form of this argument is a function that takes each element in the array (num, in our case), makes specified changes to each element, and returns a new array.  Awway.map is a higher-order function because it accepts another function as an argument.

  This is a case where arrow functions really shine.
*/

// 2. Let's create another function that makes use of a nameless arrow function.  Design a filtering function that removes tea from the sample array.
// This link may be useful: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var beverages = ['coffee', 'tea', 'kombucha', 'almondmilk', 'sparkling water', 'tea', 'orange juice'];

/*
  There are two cases where you wouldn't want to use arrow functions:
    1. within asynchronous functions
    2. within methods that need to access 'this'.
  
    You don't have to fully understand why either of them don't play well together just yet, but it is good to be aware that issues may arise.
*/

// 3. The keyword 'this' doesn't work as we would expect within this arrow function.  Let's revert this method to a standard function. 

var obj = {
  x: 'alfalfa sprouts',
  myFunc: () => {
    return this;
  }
}


/* 
TESTING AREA

We can call our functions below this line to test that they are working correctly.
*/

var x = addOne([4,5,6]);
console.log(x);