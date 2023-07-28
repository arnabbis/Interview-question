const data = {
    name:"arnab",
    age:18,
    data1:{
        name:"arnab"
    }
}

const arr = JSON.parse(JSON.stringify(data))
arr.name = "hayat"
console.log("arr",arr);
console.log("data",data)