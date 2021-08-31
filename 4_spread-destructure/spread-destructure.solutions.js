// 1.  We have a function that takes numbers as args, but we have an array of numbers.  We will need to use spread syntax to handle this.
const add = (x, y, z) => {
  return x + y + z;
}

const nums = [10, 15, 12];
add(...nums);

// 2. We need to add the nums array to a pre-existing array.
const starterNums = [2,3];
const solution = [...starterNums, ...nums];

// 3. Write a function that flattens the following arrays into a single array.  DO NOT USE ARRAY.FLAT!!
const arrays = [[3, 2, 1], 4, 5, [1, 2, 3]];

const flatten = arr => {
  const nums = [];
  arrays.forEach(ele => {
    if (Array.isArray(ele)) {
      nums.push(...ele);
    } else {
      nums.push(ele);
    }
  });

  return nums;
};

// 4. A queue of users is waiting in line for something.  We need to access the first and fourth in line using destructuring.  Use the `queue` array.
let queue = ['user2415', 'user9862', 'user3240', 'user9762'];
const [first,,, fourth] = queue; 