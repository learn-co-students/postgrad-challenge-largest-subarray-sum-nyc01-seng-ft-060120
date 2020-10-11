function largestSubarraySum(array) {
  let currentSum = 0;
  let maxSum = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    currentSum = Math.max(currentSum + currentNum, 0);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

function largestSubarraySum(array) {
  let maxSum = 0;
  let currentSum = 0;
  for (let num of array) {
    currentSum = Math.max(currentSum + num, 0);
    maxSum = Math.max(currentSum, maxSum);
    // if (currentSum > maxSum){
    //     maxSum = currentSum
    // }
  }
  return maxSum;
}

function largestSubarraySum(array) {
  let maxSum = 0;
  let currentSum = 0;
  for (let num of array) {
    currentSum + num > 0 ? (currentSum = currentSum + num) : (currentSum = 0);
    maxSum < currentSum ? (maxSum = currentSum) : (maxSum = maxSum);
  }
  return maxSum;
}
