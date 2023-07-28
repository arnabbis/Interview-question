let str="programming"
let obj = {}
let dub = []

for(let i=0;i<str.length;i++){
    if(obj[str[i]]===undefined){
        obj[str[i]]=1
    }else{
        if(obj[str[i]]===1){
            dub.push(str[i])
        }
        obj[str[i]]++;
    }
    console.log(dub)
    console.log(obj)
    
}
let arr = []
    for (let ele in obj) {
        if (obj[ele]==1) {
          arr.push(ele);
        }
      }
console.log(arr)

