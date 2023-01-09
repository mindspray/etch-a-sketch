'use strict';

function createDivGrid(sideLength = 50) {
  if (sideLength > 100) sideLength = 100;
  else if (!sideLength || sideLength < 4) sideLength = 4;

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
    console.log(e.target);
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
          element.style.setProperty("background-color", `hsl(${random(353)}, ${random(101)}%, ${random(101)}%`);
        }
      });

    let container = document.querySelector('.container');
    container.appendChild(element);
  });
}

function random(num) {
  return Math.floor(Math.random() * num);
}

function clearGrid() {
  let passed = Array.from(document.getElementsByClassName('passed'));
  passed.forEach((element) => element.style.setProperty("background-color", "white"));
}

function setGridSize() {
  createDivGrid(50);
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
