function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {}
  for (const number of array){
    const complement = target - number
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false
  // for(let i = 0; i < array.length; i++){
  //   const complement = target - array[i]
  //   for(let j = i + 1; j < array.length; j++){
  //     if (array[j] === complement) return true
  //   }
  // }
  // return false
}
/* 
  Write the Big O time complexity of your function here
  O(n*2)
*/

/* 
  Add your pseudocode here
  
  () 1 - Take the passed in Array with a place value of [0] and - it from the target number
  () 2 - if the array[2] is that number stop, otherwise increment [2] by 1 to [3]....
  () 3 - if it does not add up to target number, increment the [0] to [1] and continue on
*/

/*
  Add written explanation of your solution here

  function hasTargetSum(array, target) {
  // iterate over the array of numbers
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining numbers is the complement
      // if so, return true
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false
  return false;
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
