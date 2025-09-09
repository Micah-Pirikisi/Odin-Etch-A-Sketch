const main = document.querySelector('main'); 

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div'); 
    square.classList.add('grid-square'); 
    main.appendChild(square); 

    square.addEventListener('mouseover', () => square.style.backgroundColor = 'rgba(192, 192, 192, 0.9)'); 
}