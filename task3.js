
function findMostFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    let frequency = {};
    let maxFrequency = 0;
    let mostFrequencyElement;

    for (let element of arr) {
        frequency[element] = (frequency[element] || 0) + 1;

        if (frequency[element] > maxFrequency) {
            maxFrequency = frequency[element];
            mostFrequencyElement = element;
        }
    }

    return mostFrequencyElement;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = findMostFrequentElement(array);
console.log(result);