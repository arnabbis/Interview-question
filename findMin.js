let array = [1, 2, 3, 5, 6, 2, 1, 43, 2];
// min=array[0]
for (let i = 0; i < array.length; i++) {
  // if(min<array[i]){
  //     min=array[i]
  // }
  if (array[i] > array[i + 1]) {
    temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
    i = -1;
  }
}

console.log(array);
