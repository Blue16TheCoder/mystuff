function romanNumeralToDigits(str) { //making a fxn so i can reuse
    if (!str) return console.log('Please enter a valid input!'); //making sure null gets handled
    let romans = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]); //roman numeral def
    let conclusion = romans.get(str[str.length - 1]); //making sure it finds rightmost character in string
    for (let i = str.length - 2; i >= 0; i--) { //running for loop
        if (romans.get(str[i]) < romans.get(str[i + 1])) { //running if
            conclusion -= romans.get(str[i]);
        }
        else { //if condition doesn't meet
            conclusion += romans.get(str[i]);
        }
    }
    console.log(str, conclusion); //printing the output and input
    return conclusion; //returning conclusion
}
romanNumeralToDigits('XXVI'); //calling the fxn
romanNumeralToDigits(''); //calling the fxn