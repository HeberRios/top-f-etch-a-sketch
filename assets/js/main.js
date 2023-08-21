"use strict";

// SELECTING THE GRID CONTAINER
const gridContainer = document.getElementById("main-grid-container");
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

function GridCreation(gridSideSize) {
    const numberOfSquares = getNumberOfSquares(gridSideSize);

    createSquares(numberOfSquares);

    const squares = selectGridSquares();

    addMouseOverEvent(squares);
    addMouseOutEvent(squares);
}

GridCreation(initialGridSideSize);