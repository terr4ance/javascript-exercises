const repeatString = function(string, num) {
    if (num >= 0) {
        let newString = ""
        for (let repeat = 0; repeat < num; repeat++) {
            newString = (newString+string)
        }
        return(newString)
    } else {
        return("ERROR")
    }
};

// Do not edit below this line
module.exports = repeatString;
