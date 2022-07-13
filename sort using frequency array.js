let arr = [1, 2, 3, 3, 2, 1, 4, 5, 10, 9, 8];
let count = new Array(arr.length).fill(0);

for (let i = 0; i < arr.length; i++) {
  count[arr[i]] += 1;
}
// console.log(count)

let cur = 0;
let index = 1;
while (index < count.length) {
  for (let j = 0; j < count[index]; j++) {
    arr[cur] = index;
    cur++;
  }
  index++;
}
console.log(arr);
