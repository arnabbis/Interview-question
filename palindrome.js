// newStr=''
function palindrome(num){
    newStr=''
    for(let i=num.length-1;i>=0;i--){
        newStr=newStr+num[i]   
    }
    if(newStr==num) {
        return true
    }
    return false
}

let res = palindrome("abba")
console.log(res)

console.log("newStr",newStr)