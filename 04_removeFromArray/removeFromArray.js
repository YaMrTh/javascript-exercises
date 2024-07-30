const removeFromArray = function(array1 , values) {
    const discard = [];
    const finalArray = [];
    for (i = 1; i < arguments.length; i++) {
        if (array1.indexOf(arguments[i]) >= 0 ) {
            discard.push(arguments[i])
        };
    };
    for (j = 0; j < array1.length; j++) {
        if (discard.indexOf(array1[j]) < 0) {
            finalArray.push(array1[j])
        };

    };
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
