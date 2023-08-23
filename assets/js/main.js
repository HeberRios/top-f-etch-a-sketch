"use strict";

// SELECTING ELEMENTS
const gridContainer = document.getElementById("main-grid-container");
const customGridBtn = document.getElementById("custom-grid-btn");

// INITIAL VALUE FOR THE GRID SIZE
const initialGridSideSize = 16;

// FUNCTIONS -------------------------------------------------------------

function getNumberOfSquares(gridSideSize) {
    return gridSideSize * gridSideSize;
}

function createSquares(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        gridContainer.appendChild(div);
    }
}

function selectGridSquares() {
    const squares = document.querySelectorAll(".square");
    return squares;
}

function addMouseOverEvent(squares) {
    squares.forEach((square) => {
        square.addEventListener("mouseover", function () {
            square.style.backgroundColor = "#3A55CF";
        });
    });
}

function addMouseOutEvent(squares) {
    squares.forEach((square) => {
        square.addEventListener("mouseout", function () {
            square.style.backgroundColor = "#DB2B39";
        });
    });
}

// ALTERNATIVE FUNCTIONALITY, HOLD CLICK AND DRAG MOUSE ------------------
function pixelTrail(element) {
    if (element.buttons === 1) {
        if (element.target.classList == "square") {
            let square = element.target;
            square.style.backgroundColor = "#DB2B39";
        } else {
            return;
        }
    }
}

function addEventListenersToGridContainer() {
    gridContainer.addEventListener("mousedown", (event) => {
        pixelTrail(event);
        if (event.buttons === 1) {
            window.addEventListener("mouseover", (event) => {
                pixelTrail(event);
            });
        }
    });
}
// -----------------------------------------------------------------------

function GridCreation(gridSideSize) {
    const numberOfSquares = getNumberOfSquares(gridSideSize);

    createSquares(numberOfSquares);

    const squares = selectGridSquares();

    addMouseOverEvent(squares);
    addMouseOutEvent(squares);
}

function removePreviousGrid(gridContainer) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function getCustomGridValue() {
    let newGridSize = prompt(
        `Type the new size of the grid. (MAX:100 x 100)`,
        16
    );
    if (newGridSize > 100) {
        newGridSize = 100;
        return newGridSize;
    } else if (newGridSize <= 100 && newGridSize > 0) {
        return newGridSize;
    } else if (newGridSize < 0) {
        return 16;
    }
}

function newGridLayout(gridSideSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSideSize}, 1fr)`;
}

function createCustomGrid() {
    const newGridSize = getCustomGridValue();

    removePreviousGrid(gridContainer);

    newGridLayout(newGridSize);
    GridCreation(newGridSize);
}

// INITIAL GRID CREATION
GridCreation(initialGridSideSize);

// CUSTOM GRID CREATION
customGridBtn.addEventListener("click", createCustomGrid);
