// (function (){
//      b = 3
//      var a = b 
//     console.log(a)
// })
// ()

// // console.log(a)
// console.log(b)
// console.log(typeof a)
// console.log(typeof b)


// console.log(2*"2"+2)

// var a = 10;

// function b(){
//    a = 20;
//    console.log(typeof a)
//    return ;
//   a = function(){}
// }


// b();
// console.log(a)

// const arr =[1,2,3,4];
// const data = arr.splice(1,2)
// console.log("data",data)


// a={
//   a:10,
//   b
// }


const string = "aaabbbcccddd";
const charCount = {};

for (let i = 0; i < string.length; i++) {
  const char = string[i];
  if (charCount[char]) {
    charCount[char]++;
  } else {
    charCount[char] = 1;
  }
}

let output = "";
for (const char in charCount) {
  output += `${char}${charCount[char]} `;
}

console.log(output);