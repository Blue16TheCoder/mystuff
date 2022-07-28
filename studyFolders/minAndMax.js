function minAndMax (arry) {
    let min = Math.min(...arry);
    let max = Math.max(...arry);
    let myArray = [min,max];
    return myArray;
}
console.log(minAndMax([3,6,9,10,3,2,99,-5]));