const min = 1;
const max = 100;
const fizzFactor = 3;
const buzzFactor = 5;
const fizzBuzzFactor = fizzFactor * buzzFactor;

for (let i = min; i <= max; i++) {
    if (i % fizzBuzzFactor == 0) {
        console.log("FizzBuzz")
    } else if (i % buzzFactor == 0) {
        console.log("Buzz")
    } else if (i % fizzFactor == 0)  {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}