function romanNumeralToInt(str) {
    if(!str) return console.log(" you did send me the input - null");
    let numerals = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
    let result = numerals.get(str[str.length - 1]); // finds the rightmost character in the string.
    for (let i = str.length - 2; i >= 0; i--) {
        if (numerals.get(str[i]) < numerals.get(str[i + 1])) {
            result -= numerals.get(str[i]);
        }
        else {
            result += numerals.get(str[i]);
        }

    }
    console.log(str, result);
    return result;
}
romanNumeralToInt('');
romanNumeralToInt();
romanNumeralToInt('XXIV');
romanNumeralToInt('XXVI');
romanNumeralToInt('MXXXVIII');
romanNumeralToInt('MDCLXVI');
