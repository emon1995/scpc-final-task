
function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // If no such pair is found
}


const sortedArray = [1, 3, 6, 7, 11, 15];
const targetSum = 9;
console.log(findTwoNumbersWithSum(sortedArray, targetSum));

