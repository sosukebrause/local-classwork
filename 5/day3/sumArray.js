module.exports = function sumArray(num) {
    var total = 0;
​
    //fo throough array
    for (i = 0; i < num.length; i++) {
        total = total + num[i]
    }
    return total;
}

module.exports 