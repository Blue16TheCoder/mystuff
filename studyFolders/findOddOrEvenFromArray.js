function findOddOrEven(numberArray) {
    let oddCounter = 0;
    let evenCounter = 0;
    for (i = 0; i < numberArray.length; i++){
        if (numberArray[i] % 2 === 0) {
            evenCounter ++;
        }
        else {
            oddCounter ++;
        }
    }
    let myArray = [evenCounter, oddCounter];
    return myArray;
}
console.log(findOddOrEven([10,5,6,3,8,0,1]));