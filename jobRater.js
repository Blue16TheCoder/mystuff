function reviewManually(minimum, review) {
    let results = ['hi'];
    for (i = 0; i < review.length; i++) {
        let sum = 0;
        for (j = 0; j < review[i].length; j++) {
            sum += review[i][j];
        }
    
    let avg = sum / review[i].length;
    if (avg < minimum) {
        results.push(i);
    }
}
return results;
}
reviewManually(4, [[3, 4, 5], [1, 2, 3], [3, 3, 4, 4, 5, 1]]);
console.log(results);
