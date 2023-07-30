let data = [1,2,3,4];
let data1 = [2,4,1];
let arr = []
let arr1 = [];
for(let i=0;i<data.length;i++){
    if(data1.includes(data[i]) && !arr.includes(data[i])){
        arr.push(data[i])
    }else{
        if(!data1.includes(data[i]) && !arr.includes(data[i])){
            arr1.push(data[i])
        }
    }
}
console.log(arr)
console.log(arr1)