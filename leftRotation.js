// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. For example,
//  if 2  left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].
// Given an array of  n integers and a number, d, perform d left rotations on the array. Then print the updated array
//  as a single line of space-separated integers.

const leftRotation = (array, d) => {
  if (!d || d < 0 || d > array.length || !array) return console.log('Invalid arguments');
  console.log(`The array [${array}] rotated to the left ${d} time${d>1?'s':''} is:`);
  let i = 0;
  while (i < d) {
    array.push(array.shift());
    i++;
  }

  let rotatedArray = array.join(' ');
  console.log(rotatedArray);
  return rotatedArray;
};

leftRotation([1, 2, 3, 4, 5], 1);
leftRotation([1, 2, 3, 4, 5], 2);
leftRotation([1, 2, 3, 4, 5], 4);
