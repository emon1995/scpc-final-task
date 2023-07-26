

function SumPositiveNumber(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            sum += num[i]
        }
    }
    return sum;
}

const arr = [2, -5, 10, -3, 7];

const result = SumPositiveNumber(arr);
console.log(result);