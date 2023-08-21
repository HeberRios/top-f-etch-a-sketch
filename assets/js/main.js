"use strict";

// SELECTING THE GRID CONTAINER
const gridContainer = document.getElementById("main-grid-container");

// CREATING THE DIVS WITHIN THE CONTAINER
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    gridContainer.appendChild(div);
}

// ADDING THE "HOVER" EVENT TO EACH DIV
const squares = document.querySelectorAll(".square");

// MOUSEOVER
squares.forEach((square) => {
    square.addEventListener("mouseover", function () {
        square.style.backgroundColor = "#3A55CF";
    });
});

// MOUSEOUT
squares.forEach((square) => {
    square.addEventListener("mouseout", function () {
        square.style.backgroundColor = "#DB2B39";
    });
});
