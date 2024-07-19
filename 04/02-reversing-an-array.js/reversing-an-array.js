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
    const buffer = reverseArray(array);
    for (let i = 0; i < array.length; i++) {
        array[i] = buffer[i];
    }
}