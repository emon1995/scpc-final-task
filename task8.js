
function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return 'Error: Array should contain at least two numbers';
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    if (secondSmallest === Infinity) {
        return 'Error: No second smallest element found';
    }

    return secondSmallest;
}

console.log(findSecondSmallest([5, 2, 8, 3, 1, 7]));
console.log(findSecondSmallest([1, 1, 1, 1, 1]));
console.log(findSecondSmallest([8, 8, 5, 5, 10, 10]));
console.log(findSecondSmallest([6, 9, 3, 7, 5]));
console.log(findSecondSmallest([]));                   
