
const StringReverse = (str) => {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
        // console.log(str[i]);
    }
    return reverseStr;
}

const result = StringReverse("hello world");
console.log(result);