const main = document.querySelector('main'); 
const body = document.querySelector('body'); 

// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.createElement('button'); 
button.textContent = 'create new grid'; 

function clickHandler(e) {
    // capture user input 
    let choice;
    do {
        choice = parseInt(prompt('Number of squares per side for your grid (1–100):'));
    } while (isNaN(choice) || choice <= 0 || choice > 100);
    
    // reset grid 
    main.innerHTML = ''; 

    // grid-square creation 
    const squareSize = 960 / choice + 'px'; 
    for (let i = 0; i < choice * choice; i++) {
        const square = document.createElement('div'); 
        square.classList.add('grid-square'); 
        square.style.width = squareSize;
        square.style.height = squareSize;
        main.appendChild(square); 

        // randomize sketch colour 
        function getRandomNumber() {
            return Math.floor(Math.random() * 256); 
        }
        square.addEventListener('mouseover', () => {
            if (!square.dataset.color) {
                const r = getRandomNumber();
                const g = getRandomNumber();
                const b = getRandomNumber();
                square.dataset.color = `${r}, ${g}, ${b}`;
                square.dataset.opacity = '0.1'; 
            } else {
                let currentOpacity = parseFloat(square.dataset.opacity); 
                if (currentOpacity < 1) {
                    currentOpacity += 0.1; 
                    square.dataset.opacity = currentOpacity.toFixed(1); 
                }
            }
            square.style.backgroundColor = `rgba(${square.dataset.color}, ${square.dataset.opacity})`;
        }); 
    }
}; 

button.addEventListener('click', clickHandler); 
body.insertBefore(button, main); 

document.addEventListener('DOMContentLoaded', clickHandler)