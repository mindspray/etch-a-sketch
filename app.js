'use strict';
// This is an Etch-A-Sketch style app that "draws" onto divs over which the mouse traverses.

// This creates the game board and makes it active
function createDivGrid(sideLength = 50) {
  sideLength = Math.min(Math.max(sideLength, 4), 100);

  let totalDivs = sideLength * sideLength;
  let pixels = [];
  for (let i = 0; i < totalDivs; i++) {
    pixels.push(document.createElement('div'));
  }

  let body = document.querySelector('body');
  let switchColor = true;
  let switchColorBtn = document.querySelector(".switchColorBtn");
  switchColorBtn.addEventListener("click", ()=> switchColor = !switchColor);
  
  body.addEventListener('click', (e) => {
    if (e.target.className === "sideBar") clearGrid();
    });
    pixels.forEach((element) => {
      let color = 100;
      element.style.setProperty('min-width', `${960 / sideLength}px`);
      element.style.setProperty('min-height', `${960 / sideLength}px`);
      element.addEventListener('mouseenter', () => {
        element.classList.add("passed");
        if (switchColor) {
          element.style.setProperty("background-color", `hsl(0, 0%, ${color-=10}%)`);
        } else {
          element.style.setProperty("background-color", `hsl(${getRandom(352)}, ${getRandom(100)}%, ${getRandom(100)}%`);
        }
      });

    let container = document.querySelector('.container');
    container.appendChild(element);
  });
}

// Get a random number between 0 and the number entered, inclusive
function getRandom(num) {
  return Math.floor(Math.random() * (num + 1));
}

function clearGrid() {
  let passed = Array.from(document.getElementsByClassName('passed'));
  passed.forEach((element) => element.style.setProperty("background-color", "white"));
}

function setGridSize() {
  createDivGrid();
  let button = document.querySelector('.setGridSize');
  let container = document.querySelector('.container');
  button.addEventListener('click', () => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    let gridSize = prompt('Please enter a grid size between 4 and 100');
    createDivGrid(gridSize);
  });
}

setGridSize();
