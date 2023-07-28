const arr = [1,2,3,4];
 const data = arr.reduce((arr,curr)=>{
    arr.push(curr+10);
    return arr;
},[])

console.log(data); // 22