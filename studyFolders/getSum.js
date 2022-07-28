function getSum(aray) {
    let sum = 0;
    for (i = 0; i < aray.length; i++) {
        sum += aray[i];
    }
    return sum;
}
console.log(getSum([2,4,10,4]));
