function sortArrayDescending(arr) {
  return arr.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  });
}

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let sortedArr = sortArrayDescending(arr);
console.log(sortedArr); // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1, 0]
