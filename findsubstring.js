// function consecutive(){
// let string ="geesfor"
// obj={}
// let dup=[]
// for(let i=0;i<string.length;i++){
//     // let temp = string[i];
//     // if(string[i]===string[i+1]){
//     //     temp = string[i+1]
//     // }
//     if(obj[string[i]]){
//         dup.push([string[i]])
//     }
//     else{
//         obj[string[i]]=1
//     }
// }
// return dup
// }

// console.log(consecutive())
// console

// let arr = ["arnab","biswas","hayat","zeet"]
// let highest = arr.reduce((acc,curr)=>{
//     return curr.length>acc.length ? curr:acc
// },arr[0])

// console.log(highest)

let str1= "Top 179 JavaScript Interview Questions  JavaScript  179"
let str = ''
for(let i=str1.length-1;i>=0;i--){
    str = str+str1[i]
}
console.log(str)