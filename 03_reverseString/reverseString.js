const reverseString = function(word) {
    let countdown = word.length;
    let reverse = "";
    for (i = 1; i < word.length + 1; i++) {
        reverse += word[countdown - i]
    };
    return reverse;   
};

// Do not edit below this line
module.exports = reverseString;