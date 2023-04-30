document.addEventListener('DOMContentLoaded', function () {

    setupGame(); // Intialises game setup

    // Listens for which cell has been clicked
    for (let cell of cells) {
        cell.addEventListener('click', function () {

            let col = this.getAttribute('data-col');
            let row = this.getAttribute('data-row');
            let cellMarker = col + row;
            let val = cell.innerHTML;

            if (cellsUnavailable.includes(cellMarker)) {
                alert('Not allowed');
            } else {
                cellSelect(col, row, val);
            }
        });
    }
});

let grid = document.getElementById('game-area');
let cells = grid.children;
let cellsUnavailable = [];

/**
 * Sets up the initial game state. 
 */
function setupGame() {

    cellsUnavailable = []; //Clears the array of any data

    for (cell of cells) {

        let cellRef = 0; //Ensures no cells are greyed out during setup
        let cellVal = Math.floor(Math.random() * 3);
        cell.innerHTML = cellVal; //Fills cells with values of 0, 1 or 2

        cellStyle(cellVal, cellRef);
    }
}

/**
 * Increases the value of a cell by the value it currently contains.
 * All cells in the same row and column are increased by the same amount.
 * Modular addition is used to prevent an increase beyond 5. 
 */
function cellSelect(col, row, val) {

    if (val == 0) {
        alert('Selecting an empty cell is not allowed!');

    } else if (val == 5) {
        alert('Selecting a 5 is not allowed!');

    } else {
        let cellMarker = col + row;
        cellsUnavailable.push(cellMarker);

        for (cell of cells) {

            let cellColumn = cell.getAttribute('data-col');
            let cellRow = cell.getAttribute('data-row');
            let cellRef = cellColumn + cellRow;
            let currentVal = cell.innerHTML;

            if (cellColumn === col || cellRow === row) { //Finds all cells in the same column and row as the selected cell 
                newVal = parseInt(currentVal) + parseInt(val); //Calculates new values for cells according to cell selected
                newVal > 5 ? cell.innerHTML = newVal - 5 : cell.innerHTML = newVal; //Uses modular sum to keep range as 1-5                             
            }

            cellVal = cell.innerHTML;
            cellStyle(cellVal, cellRef); //Restyles cells, where appropriate, according to new attributes
        }
    }
    checkWin();
}

/**
 * Styles the cell according to its value and
 * whether or not it has already been selected. 
 */
function cellStyle(cellVal, cellRef) {

    // Sets text color
    if (cellVal == 0) {
        cell.style.color = 'lightblue';
    } else {
        cell.style.color = 'whitesmoke';
    }

    // Sets background color
    if (cellVal == 1) {
        cell.style.backgroundColor = 'crimson';
    } else if (cellVal == 2) {
        cell.style.backgroundColor = 'darkorange';
    } else if (cellVal == 3) {
        cell.style.backgroundColor = 'forestgreen';
    } else if (cellVal == 4) {
        cell.style.backgroundColor = 'royalblue';
    } else if (cellVal == 5) {
        cell.style.backgroundColor = 'rebeccapurple';
    }

    // Sets cursor style
    if (cellVal == 0 || cellVal == 5) {
        cell.style.cursor = 'not-allowed';
    } else {
        cell.style.cursor = 'pointer';
    }

    // Overides above styles if cell has been already selected
    if (cellsUnavailable.includes(cellRef)) {
        cell.style.backgroundColor = 'gainsboro';
        cell.style.cursor = 'not-allowed';

        if (cellVal < 5) {
            cell.style.color = 'gray';
        } else {
            cell.style.color = 'rebeccapurple';
        }
    }
}

/**
 * Checks to see if the user has won the game.
 * The game is won by having five 5s in any column/row
 */
function checkWin() {

}