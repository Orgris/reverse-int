module.exports = function reverse(n) {
    let num = n;
    let reversNum = "";
    let numString = num.toString();

    console.log(numString);

    for (let i = numString.length - 1; i >= 0; i--) {
        if (numString[i] !== '-'){
            reversNum += numString[i];
        }
    }
    console.log(reversNum);

    return reversNum;
};
