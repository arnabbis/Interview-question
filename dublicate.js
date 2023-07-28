// let arr = [1,2,3,2,4,1,4];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             console.log(arr[i]);
//         }
//     }
// }

let arr = [1, 2, 3, 2, 4, 1, 4];
let duplicates = {};

for (let i = 0; i < arr.length; i++) {
  if (duplicates[arr[i]]) {
    console.log(arr[i]); // Found a duplicate
  } else {
    duplicates[arr[i]] = true; // Mark the element as encountered
  }
}
