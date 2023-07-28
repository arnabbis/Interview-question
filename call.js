// function arnab(){
//     return function a(){
//         console.log('I am function');
//     }
// }

// const b = arnab()
// console.log(b());

const data = {
    name:"arnab",
    age:21,
    arr:[2,5,7,9,20,19].map((index)=>{
           return index %2==0 ? index:null
    }).filter((index)=>{
        return index
    })
    .reduce((acc,index)=>{
        console.log("acc",acc)
        console.log("curr",index)
         return acc+index   // acc =2  = 2+2 =4  = 4+20 = 24
        // return arr.push(index+10)
    },2)
}

const data1 = {
    ...data,
    arr:["gp",'ng','mum']
}

data1.arr[0]='bal'
console.log(data);
console.log(data1)