// const actors = [{
//     name: 'Tom',
//     surname: 'Hanks',
    
// },
// {
//     name: 'Brad',   
//     surname: 'Pitt',
// }]


// for(let i=0;i<actors.length;i++){
//      actors[i]['fullname'] = actors[i]['name'] + " " + actors[i]['surname']
//     console.log("actor 1",actors);
// }
// console.log("actor",actors);
// function arnab(name = 'rohit'){

// const arr = [1,2,3,4,5,6]
//  const data = arr.map((a)=>{
//     if(a%2==0){
//         return a;
//     }else{
//         return false
//     }
    
//  })
// console.log(data);
// arnab

// let data =  3*4+"6"*2     // BODMADS
// console.log(data);

// let add = (((1+2)*3) + 4*5)  // 9+20

// let data = 3*4+"6"-2
// console.log(data);

// const arr = [1,2,3,4,4,3,1];
// const data = arr.reduce((arr,curr)=>{
//     if(arr.indexOf(curr)==-1){
//         arr.push(curr);
//     }
//     return arr;
// },[])
// console.log(data);


// const arr = [1,2,3,4]

// const myPromise = new Promise((resolve, reject) => {
//     // Promise code here (e.g., asynchronous operations)
//     // In this example, we don't resolve or reject the Promise
//   });
  
//   console.log(myPromise);

// let arr = {
//     name:"arnab"
// }

// function Rarr(callback) {
//   setTimeout(() => {
//     console.log(arr);
//     callback();
//   }, 3000);
// }

// function pushArr() {
//   setTimeout(() => {
//     arr['age'] = 21
//     console.log(arr);
//   }, 2000);
// }

// Rarr(pushArr);

// var a = 10;

// function register(callback){
//     setTimeout(()=>{
//     console.log("user is registered");
//         callback()

//     },2000);
// }


// function login(){
//     setTimeout(()=>{
//         console.log("user  successfully login")
//     },1000)
   
// }

// register(login)

const funcA = (nums, target) => {
    for (var i = 0; i <nums.length; i++) {
        var hold = target - nums[i]
        if (nums.includes(hold) && i != nums.indexOf(hold)) {
            return [i, nums.indexOf(hold)]
        }
    }
};

let a = funcA([1,2,3,4],5)
console.log(a)

function createPyramid(rows) {
    for (let i = 0; i < rows; i++) {
      let pattern = '';
      for (let j = 0; j < rows - i - 1; j++) {
        pattern += ' ';
      }
      for (let k = 0; k <= i; k++) {
        pattern += '* ';
      }
      console.log(pattern);
    }
  }
  
  // Example usage
  createPyramid(5);
  

const arr = [1,2,3,4];

arr.forEach((a,b)=>{
    a[b]=5
})

console.log(arr)