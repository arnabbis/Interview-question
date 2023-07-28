let arr = [1, 2, 3, 4,5];
let arr1 = [5, 6, 7, 9,10];
let arr3 = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] % arr[i] === 0) {
      arr3.push(arr[i]);
      break; // Once a multiple is found, no need to continue checking
    }
  }
}

console.log(arr3); // Print the final array containing the multiples
