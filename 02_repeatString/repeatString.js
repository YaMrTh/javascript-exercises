const repeatString = function(string , number) {
    let phrase = "";
    if (number >= 0) {
        for (let i = 0; i < number; i++) {
            phrase += string
        };
        return phrase;
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
