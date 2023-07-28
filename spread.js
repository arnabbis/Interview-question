

// let data = a.split("")
// console.log(data)

// function dublicate(){
//     let a = "arnabb"
//     let dub = '';
//     let value = false
//     for(let i=0;i<a.length;i++){
//         if(a[i]===a[i+1])
//         dub = a[i]
//         value=true
//         break;
//     }
//     if(value){
//         return dub
//     }else{
//         return "no dub found"
//     }
// }
// console.log(dublicate())

// function duplicate(a) {
//     let dub = "";
//     let foundDuplicate = false;
    
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === a[i + 1]) {
//             dub = a[i];
//             foundDuplicate = true;
//             break; // Exit the loop after finding the first duplicate
//         }
//     }
    
//     if (foundDuplicate) {
//         return dub;
//     } else {
//         return "No duplicate found";
//     }
// }

// let dublicate = duplicate("helol");
// console.log(dublicate)



function x(){
    const data = "brnab";
    const arr= [];
    for(let i=0;i<data.length;i++){
        if(arr.includes(data[i])){
            return data[i]
        }else{
            arr.push(data[i])
        }
        
    }
    return "no dublicate found"
}

let res = x();
console.log(res)


