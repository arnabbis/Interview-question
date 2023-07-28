// let arr = ["arnab","hayat","hayat"]

// function dub(){
//     let data = []
//     for(let i=0;i<arr.length;i++){
//         if(!data.includes(arr[i]))
//         data.push(arr[i])
//     }
//     return data
// }

// console.log(dub())

// function subString(){
//     let data = "hii arnab"
//     let substring = "h"
//     let res = data.includes(substring)
//     console.log(res)
// }

// subString()


function findelement(){
    let str1 = "arnab";
    let str2 = "biswas";
    let data = []
    for(let i=0;i<str2.length;i++){
    if(!str1.includes(str2[i]) && !data.includes(str2[i])){
        data.push(str2[i])
    }
    
}
for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i]) && !data.includes(str1[i])) {
      data.push(str1[i]);
    }
  }

  return data;
}


console.log(findelement())