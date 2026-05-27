const reverseString = function(input) {
    const stringLength = input.length
    let output = ""
    for (let index = stringLength; index >= 0; index--) {
        let character = input.charAt(index)
        output = (output + character)
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
