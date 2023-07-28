// let arr = [1,3,5,10]; //
// max=arr[arr.length-1]
// // console.log(max)
// for(let i=0;i<arr[arr.length-1];i++){
//     // console.log(i+1)
//     if(!arr.includes(i+1)){
//         console.log(i+1)
//     }
// }

let str="programming"
let obj = {}
let dub = []
// newStr=''
for(let i=0;i<str.length;i++){
    if(obj[str[i]]===undefined){
        obj[str[i]]=1
    }else{
        if(obj[str[i]]===1){
            dub.push(str[i])
        }
        obj[str[i]]++;
    }
    return dub
}
console.log(obj)



// function findMissingNumber(arr) {
//     const n = arr.length + 1;
//     console.log("n",n)
//     const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
//     const actualSum = arr.reduce((sum, num) => sum + num, 0);
//     console.log(actualSum)
//     const missingNumber = expectedSum - actualSum;
//     return missingNumber;
//   }
  
//   // Example usage:
//   const arr = [1,2,4,3,6,8];
//   const missingNum = findMissingNumber(arr);
//   console.log("The missing number is:", missingNum);
let a = [1,2,3,4];

let data = a.forEach((ele,index)=>{
    console.log(ele)
    // if(ele[index]===2){
    //     ele[index]=5;
    // }
    // return ele
})

console.log(data)