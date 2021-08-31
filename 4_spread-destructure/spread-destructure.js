/*
  SPREAD
  Spread can be used when we have an array of items that we need to use as individual elements or when we need to add an array onto another.
  The spread operator looks like this:
            ...
  These can be tricky.  Follow along for these first two problems before taking off on your own.
*/

/* 
TESTING AREA

We can call our functions below this line to test that they are working correctly.
*/

// 1.  We have a function that takes numbers as args, but we have an array of numbers.  We will need to use spread syntax to handle this.
const add = (x, y, z) => {
  return x + y + z;
}

const nums = [10, 15, 12];

// 2. We need to add the nums array to a pre-existing array.
const starterNums = [2,3];
const solution =['???'];

// 3. Write a function that flattens the following arrays into a single array.  DO NOT USE ARRAY.FLAT!!
const arrays = [[3, 2, 1], 4, 5, [1, 2, 3]];

const flatten = arr => {
  
};



/*
  DESTRUCTURING
  Destructuring is useful when we know what will be passed as part of an array.  It looks exactly like the spread operator, but is used differently.  It is a way of pulling out the necessary information but ignoring the rest.
*/

// Example
let queue = ['user2415', 'user9862', 'user3240', 'user9762'];
let [ firstInLine, secondInLine ] = queue;

// We can even access deeper elements in the array like so:
let [first, , third] = queue;

// We can even use the spread operator to catch all remaining variables in the array
let [one, two, ...rest] = queue;
// one = 'user2415'
// two = 'user9862'
// rest = ['user3240', 'user9762']

// 4. A queue of users is waiting in line for something.  We need to access the first and fourth in line using destructuring.  Use the `queue` array.




/* 
TESTING AREA

We can call our functions below this line to test that they are working correctly.
*/