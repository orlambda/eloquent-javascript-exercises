function range (start, end, step = 1) {
    let output = [];
    if (start <= end && step > 0) {
        for (let n = start; n <= end; n += step) {
            output.push(n);
        }
    } else if (start >= end && step < 0) {
        for (let n = start; n >= end; n += step) {
            output.push(n);
        }
    }
    return output;
}

function sum (numbers) {
    let total = 0;
    for (let n of numbers) {
        total += n;
    }
    return total;
}

let myRange = range(10, 1, -2);
console.log(sum(myRange));