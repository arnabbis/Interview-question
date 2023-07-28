// // Array.prototype.sum = function(){
// //     return this.reduce((acc,curr)=>{
// //         acc.push(curr+10)
// //         return acc
// // },[])
// // }


// // const arr = [1,2,3,4]
// // console.log(arr.sum())

// // Number.prototype.sum = function(){
// //     return this+this
// // }

// // const data = 20;
// // console.log(data.sum())
// let user = {
//     company: function(){
//         return this.name
//         // console.log(this.name)
//     },
//     v:function(){
//         let date=new Date().getFullYear()-this.birth
//         return date
//     }
// }

// const data = {
//     name:"arnab",
//     age:23,
//     // getComapany: user.company
//     // get
// }

// let a={
//     a:"amit",
//     birth:1986,
//     // getBirtDate: user.v
// }

// data.__proto__ = user;
// a.__proto__ = user;
// console.log(data)
// console.log(a)


function arnab(name){
    this.name = name;
}

arnab.prototype.gret = function(){
    return `my name is ${this.name}`
}

const result = new arnab('arnab')

console.log(result.gret())

