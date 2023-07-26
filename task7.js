
function romanToInteger(roman) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentSymbol = roman[i];
        const currentValue = romanMap[currentSymbol];

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

console.log(romanToInteger('III'));   // Output: 3
console.log(romanToInteger('IX'));    // Output: 9
console.log(romanToInteger('XXI'));   // Output: 21
console.log(romanToInteger('XL'));    // Output: 40
console.log(romanToInteger('XCIV'));  // Output: 94
console.log(romanToInteger('MMXXI')); // Output: 2021
