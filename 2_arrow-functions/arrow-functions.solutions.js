// 1. Let's rewrite our subtraction function from the last section as an arrow function.

const subtract = (x, y) => {
  var diff = x - y;
  return diff;
}

// 2. Let's create another function that makes use of a nameless arrow function.  Design a filtering function that removes tea from the sample array.
// This link may be useful: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var beverages = ['coffee', 'tea', 'kombucha', 'almondmilk', 'sparkling water', 'tea', 'orange juice'];

var filterBeverages = (array) => {
  var res = array.filter(item => item != 'tea');
  return res;
};

// 3. The keyword 'this' doesn't work as we would expect within an arrow function.  Let's revert this method to a standard function. 

var obj = {
  x: 'alfalfa sprouts',
  myFunc: function() {
    return this;
  }
}