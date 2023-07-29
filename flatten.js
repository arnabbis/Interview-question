var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let str = [];
for(let i=0;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
        str.push(a[i][j])
    }
}
console.log(str)