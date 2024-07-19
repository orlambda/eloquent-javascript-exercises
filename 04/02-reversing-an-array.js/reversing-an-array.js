// produce a new array
function reverseArray (inputArray) {
    let outputArray = [];
    // unshift is slower than push - better to loop through array from length-1 to 0 and push
    for (let element of inputArray) {
        outputArray.unshift(element);
    }
    return outputArray;
}

// modify the given array
function reverseArrayInPlace (array) {
    // for odd-lengthed arrays, the middle element doesn't need to be swapped
    let length = array.length;
    let max = Math.floor(length / 2);
    for (let i = 0; i < max; i++) {
        let buffer = array[i];
        array[i] = array[length - i - 1];
        array[length - i - 1] = buffer;
    }
    return array;
}