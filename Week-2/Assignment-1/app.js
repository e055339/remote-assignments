function max(numbers) {
  // your code here, for-loop method preferred
  //第一時間想到的方法且時間複雜度為O(1)，用for-loop則要花O(n);
  //   numbers.sort((a, b) => a - b); //array.sort()的時間複雜度為O(nlogn)
  //   return numbers[numbers.length - 1];
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

function findPosition(numbers, target) {
  // your code here, for-loop method preferred
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
