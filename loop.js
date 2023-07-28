const data = [1,2,3,4]
let sum =0;
let temp =[]
let a = data.reduce((ele,curr)=>{
    
    return  temp.push(ele+curr)
},0)

console.log(a)