// const x = require('./closure.js')
// let arr = [1,2,3,4];
// let data = arr.forEach((a)=>{
//     console.log(a)
// })

// console.log(data)


// let arr1 = [11,2,3,4]

// let maxnumber=0

    // console.log(a)


// let data = arr1.forEach((index)=>{
//     if(index>a){
//         a = index
//     }
//     console.log(a)
// })

// console.log(data)

// let data = arr1.reduce((acc,curr)=>{
//     console.log(acc,curr)
//     if(curr>acc){
//         acc=curr
//     }
//     return acc
// })
// console.log(data)

// for(let i=0;i<arr1.length;i++){
//     if(maxnumber<arr1[i]){
//         maxnumber = arr1[i];
//     }
// }
// console.log(maxnumber)


// for(let i=0;i<arr1.length;i++){
//     if(maxnumber<arr1[i]){
//         maxnumber=arr1[i]
//     }
// }
// console.log(maxnumber)

// let arr = [1,2,3,4];

// let data = arr.reduce((acc,curr)=>{
//     arr.push(curr+1)
//     console.log(arr)
// },[])




// // console.log(data)

// let name = "Arnab Biswas";

// // Split the name into first and last names
// let a = name.split(' ');
// // console.log()

// // Store the names in separate arrays
// // let firstNameArray = Array.from(firstName);
// // let lastNameArray = Array.from(lastName);

// // Print the arrays
// let arrData = [];
// let arrdata = [];

// arrData.push(a[0])
// arrdata.push(a[1])
// console.log("First Name Array:", arrData);
// console.log("Last Name Array:", arrdata);

// var obj = {
//     a:this,
//     func:function(){
//         console.log(this)
//     },
//     func2:()=>{
//         console.log(this)
//     }
// }
// console.log(obj.a)
// console.log(obj.func())
// console.log(obj.func2())


// const promise1=Promise.resolve('first')
// const promise2=Promise.resolve('second')
// const promise3=Promise.reject('third')
// const promise4=Promise.resolve('fourth')


// const runPromises = async()=>{
//     const result = await Promise.all([promise1,promise2])
//     const result1 = await Promise.all([promise3,promise4])
//     // console.log(result)
//     return [result,result1]
// }
// runPromises().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

// var arr1=[1,3]
// var arr2=[arr1,[5,5]]
// var arr3=[...arr2,[1,8]]

// console.log(arr3)

// const arr = [1,2,3,4,5,6,7,8,9,10]

// const a = arr.reduce((acc,curr,i)=>{
//     ({...acc,[curr]:i})
// },{})
// console.log(a)

// const b = {};

// for(let i=0;i<arr.length;i++){
//     b[arr[i]] = i
// }

// console.log(b)


// let arr = "arnab";
// x(arr)
// console.log(arr[0])

const data = '121';
for(let i=0;i<data.length;i++){
    // console.log("i",data[i])
    for (let j = data.length - 1; i < j; j--) {
        // console.log("j",data[i]);
        if(data[i]!=data[j]){
            console.log("not palindrome")
        }else{
              console.log("palindrome")
        }
      }
      
}