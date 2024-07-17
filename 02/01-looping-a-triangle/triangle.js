const height = 7;
for (let row = 1; row <= 7; row++) {
    let rowOutput = "";
    // treat each "#" as a column
    for (let column = 1; column <= row; column++) {
        rowOutput += "#";
    }
    console.log(rowOutput)
}