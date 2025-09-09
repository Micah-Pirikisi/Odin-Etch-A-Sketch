const main = document.querySelector('main'); 
const body = document.querySelector('body'); 

const button = document.createElement('button'); 
button.textContent = 'create new grid'; 

function clickHandler(e) {
    let choice;
    do {
        choice = parseInt(prompt('Number of squares per side for your grid (1–100):'));
    } while (isNaN(choice) || choice <= 0 || choice > 100);
    
    main.innerHTML = ''; 

    const squareSize = 960 / choice + 'px'; 

    for (let i = 0; i < choice * choice; i++) {
    const square = document.createElement('div'); 
    square.classList.add('grid-square'); 
    square.style.width = squareSize;
    square.style.height = squareSize;
    main.appendChild(square); 
    square.addEventListener('mouseover', () => square.style.backgroundColor = 'rgba(192, 192, 192, 0.9)'); 
    }
}; 

button.addEventListener('click', clickHandler); 
body.insertBefore(button, main); 

document.addEventListener('DOMContentLoaded', clickHandler)