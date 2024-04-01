function count(input) {
  // your code here
  let counter = {};

  for (let i = 0; i < input.length; i++) {
    if (!counter[input[i]]) {
      counter[input[i]] = 1;
    } else {
      counter[input[i]]++;
    }
  }

  return counter;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
//should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  let counter = {};

  for (let i = 0; i < input.length; i++) {
    if (!counter[input[i].key]) {
      counter[input[i].key] = input[i].value;
    } else {
      counter[input[i].key] += input[i].value;
    }
  }
  return counter;
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
