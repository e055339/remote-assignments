//Map寫法 O(N)
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];

    if (map.has(num)) {
      return [map.get(num), i];
    }
    map.set(nums[i], i);
  }
};

//雙層for loop O(N^2)
var twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i, j);
      }
    }
  }
  return result;
};

//hash table O(N)
var twoSum = function (nums, target) {
  let hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];

    if (hashTable[num] && hashTable[num] !== i) {
      return [i, hashTable[num]];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
