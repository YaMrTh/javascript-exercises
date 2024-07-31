const sumAll = function(number1, number2) {
    let small = 0;
    let big = 0;
    let sum = 0;
    if (number1 < 0 || number2 < 0 || Number.isInteger(number1) === false || Number.isInteger(number2) === false) {
        return "ERROR"
    } else {
        if (number1 > number2) {
            small = number2;
            big = number1 + 1;
        } else {
            small = number1;
            big = number2 + 1;
        };
        for (i = small; i < big ; i++) {
            sum += i;
        }
    };
    return sum;

}

// Do not edit below this line
module.exports = sumAll;
