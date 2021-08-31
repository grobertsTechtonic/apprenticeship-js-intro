/*
ES6 released new ways of declaring variables.

LET
  - Let is a way of declaring a variable that may be changed at a later time.  We use this for anything that can or will change in the course of a function or application.

CONST
  - Const declares a variable that will not be changed.  It will throw an error if our program attempts to change it.

There is a bit of controversy in the software development community about whether to only use these new varible declarations or to stick with using var only.  I personally find a lot of value in const and let, and have not worked on a single professional project that uses var.
*/

// 1. Clean up this function to use the new es6 variable declarations. (You don't need to understand all of this function just yet.)
var users = [
  {name: 'cynthia', age: 27},
  {name: 'zayne', age: 12},
  {name: 'juan', age: 18},
  {name: 'gabriella', age: 38},
  {name: 'gerald', age: 72},
];

var sortByAge = (users) => {
  var sortedUsers = {young: [], medium: [], old: []};
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.age <= 18) {
      sortedUsers.young.push(user.name);
    } else if (user.age > 18 && user.age < 70) {
      sortedUsers.medium.push(user.name)
    } else {
      sortedUsers.old.push(user.name);
    }
  }

  return sortedUsers;
};

// 2. Let's write an arrow function with es6 declarations goes through a numbers array, and finds the highest number.




/*
  SCOPE
  scope is created in each function, arrow function, class, or application we build.  It essentially means that some variables can only be accessed within particular areas.  Scope can get pretty complicated and you will be able to pick up on the rules as you go.  The basic rule of thumb is to nest variables as closely to where they are needed and keep them within the function where they will be needed.
*/

// 3.  This scope is confused.  Let's fix it.
const scope = () => {
  const arr = [1,2,3];

  arr.forEach((num) => {
    const res = [];
    res.push(num * 3);
  })

  return res;
}

/* 
TESTING AREA

We can call our functions below this line to test that they are working correctly.
*/