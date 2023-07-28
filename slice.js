// let arr = [1,2,[3,4],5,6];

//   let data =  arr.splice(0,3)

// console.log(arr,data)

// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// var t = animals.splice(2,4);
// console.log(t,animals);


// let data = [1,,2,4,2,3,3,4,2,1,2]

function countDuplicates(arr) {
    const numCount = {};
    let duplicates = 0;
    for(let element of arr){
        console.log("element",element)
        if(numCount[element]===undefined){
            numCount[element]=1;
        }else{
            if(numCount[element]===1){
                duplicates++
            }
            numCount[element]++
            // console.log(numCount[element])
        }
        
    }
    return duplicates
}

// Example usage:
const data = [1, 2,1,3,3,4,1];
console.log(countDuplicates(data)); // Output: 4 (2 has two duplicates, 3 and 4 each have one duplicate)
