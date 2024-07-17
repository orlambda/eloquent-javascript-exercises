const size = 8;

const blackSquare = "#";
const whiteSquare = " ";

let grid = "";

// false means white, true means black
// top left corner is always white
let startingColour = false;

// each rank/row
for (let rank = size; rank >= 1; rank--) {
    let currentColour = startingColour;
    
    // each file/column
    for (let file = 1; file <= size; file++) {
        if (currentColour) {
            grid += blackSquare;
        } else {
            grid += whiteSquare;
        }
        currentColour = !currentColour;
    }

    grid += "\n";
    startingColour = !startingColour;
}
console.log(grid);