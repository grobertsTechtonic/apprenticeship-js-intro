/*
FUNCTIONS

Functions are the basic building blocks of programming.  They enable us to reuse the same code as many times as we need.

There are a few functional definitions we will need to know for this section:
  - Function: A self contained block of code that can be used multiple times
  - Arguments: Things that are passed to functions that can affect the outcome of the code block
  - Method: (optional) A function that is inside of an object, as opposed to a standalone function
  - Return: A keyword in javascript that tells a function what to output.  Necessary in about 99% of functions.

HINT: If you can't read all of these notes easily, press option + z.
*/

// Example
function add(x, y) {
  return x + y;
}

// 1. Let's build a simple subtraction function.




// 2. Let's build a function with an optional argument.
// arguments: name, passiveAggressive



/*
3. The first estimate of the size of the planet Earth was made by a Greek philosopher named Eratosthenes.  Eratosthenes estimated the size of the planet using an assumption that the earth was a perfect sphere, and three variables.  He started by finding the exact time that the sun was at the highest point in the sky above a city called Syene.  He then found the angle of the sun above Alexandria at the same time, which turned out to be 7 degrees.  The distance between the two cities was estimated to be 515 miles.  Seven degrees is about one 50th of a full circle, so he multiplied the distance between the two cities by 50 and found the Earth's circumference to be about 26,000 miles, just 5% off of our modern estimates.  Not too shabby!

We could theoretically create a function to measure the circumference of any circular planet.  Let's do this below.

Here is the equation for clarity:

angle = degree of sun's angle at second location.  We can assume that the degree is 0 at the first location.
dist = distance between the two locations (in miles)
res = (360 / (0 + angle)) * dist;
*/



/* 
TESTING AREA

We can call our functions below this line to test that they are working correctly.
*/

var x = add(515, 7);
console.log(x);