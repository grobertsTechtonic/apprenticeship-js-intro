// 1. Clean up this function to use the new es6 variable declarations. (You don't need to understand all of this function just yet.)
const users = [
  {name: 'Cynthia', age: 27},
  {name: 'Zayne', age: 12},
  {name: 'Juan', age: 18},
  {name: 'Gabriella', age: 38},
  {name: 'Gerald', age: 72},
];

const sortByAge = (users) => {
  const sortedUsers = {young: [], medium: [], old: []};  // *
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
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
// * This one is const because CONST creates immutable binding, not immutable variables.  This means we cannot reassign sortedUsers, but we can change the internals.

// 2. Let's write an arrow function with es6 declarations goes through a numbers array, and finds the highest number.
const numbers = [9, 36, 52, 8, -3, 106];
const highestNum = (numbers) => {
  let highestNum = 0;
  numbers.forEach(num => {
    if (highestNum < num) {
      highestNum = num;
    }
  });
  
  return highestNum;
};

// 3.  This scope is confused.  Let's fix it.
const scope = () => {
  const arr = [1,2,3];
  const res = [];


  arr.forEach((num) => {
    res.push(num * 3);
  })

  return res;
}