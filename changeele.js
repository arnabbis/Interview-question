let a = [1,2,3,4];

let data = a.forEach((ele,index)=>{
    // console.log(ele)
    // console.log(index)
    if(a[index]===2){
        a[index]=5;
    }
    // console.log(a)
})
console.log(a)
console.log(data)