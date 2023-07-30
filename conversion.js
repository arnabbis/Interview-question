// let arr = [1,2,3,4];
// let obj = {}
// for(let i=0;i<arr.length;i++){
// obj[i] = arr[i]
// }
// console.log(obj)

// const data = {
//     name:"arnab",
//     age:10,
//     company:"ola"
// }
// let arr = []
// for (let key in ){
//     arr.push([key,data[key]])
// }
// console.log(arr)

// function capitalizeFirstLetterOfEachWord(str) {
//     const words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
//   }
  
//   const inputString = "hello world";
//   const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
//   console.log(capitalizedString); // Output: "Hello World"


// const word = "hello world";

// let str=''
// for(let i=0;i<word.length;i++){
//     // console.log(word[i])
//     if(i==0){
//         str=str+word[i].toUpperCase()
//     }
//     else if(word[i]==' '){
//         // console.log("amit")
//         str=str+" "+word[i+1].toUpperCase()
//         // console.log(str)
//     }
//     else {str=str+word[i]}
//     // break
// }
// split=str.split("")
// string=[...new Set(split)]
// console.log(string.join(""))

let arr = [1, -1, 3, 2, -7, -5, 11, 6]
let k = 4
postive=[]
negatice=[]

let n = arr.length
let newarr = []
for(let i=0;i<n;i++){
    
    if(arr[i]>arr[i+1]){
        let temp = arr[i];
        arr[i]= arr[i+1];
        arr[i+1]=temp
        i=-1
    }
    
}
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        postive.push(arr[i])
        console.log(postive)
    }else{
        negatice.push(arr[i])
        console.log(negatice)
    }
}
concatedarray=[...postive,...negatice]
    console.log(concatedarray)
// console.log(arr)
    

// console.log(postive,negatice)

















// let words = word.split(' ');
// let str = '';


// for (let i = 0; i < words.length; i++) {
//     // console.log(words[i])
//     str = str + words[i].charAt(1).toUpperCase() + words[i].slice(1).toLowerCase()

// }

// str = str.trim(); // To remove the trailing space after the last word
// console.log(str);

  