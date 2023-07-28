let input="arnab hayat";
let res = ''
for(let i=0;i<input.length;i++){
    if(i%2!==0){
        res = res+input[i].toUpperCase()
    }
}
console.log(res)