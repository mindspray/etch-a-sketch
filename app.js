'use strict';
function createDivGrid(sideLength = 50) {
  if (sideLength > 100) {
    sideLength = 100;
  } else if (!sideLength || sideLength < 4) {
    sideLength = 4;
  }

  let totalDivs = sideLength * sideLength;
  let pixels = [];
  for (let i = 0; i < totalDivs; i++) {
    pixels.push(document.createElement('div'));
  }

  let body = document.querySelector('body');
  
  body.addEventListener('click', (e) => {
    if (
      e.target.tagName === 'BODY' ||
      e.target.className === "sideBar"
      ) clearGrid();
    });
    
    pixels.forEach((element) => {
      element.style.setProperty('min-width', `${960 / sideLength}px`);
      element.style.setProperty('min-height', `${960 / sideLength}px`);
      element.addEventListener('mouseenter', () => {
        element.classList.add('passed');
      });
    let container = document.querySelector('.container');
    container.appendChild(element);
  });
}

function clearGrid() {
  let passed = Array.from(document.getElementsByClassName('passed'));
  passed.forEach((element) => element.classList.remove('passed'));
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
