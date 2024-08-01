document.querySelector('.menuBarra').addEventListener('click', animacionMenu);

let barra1 = document.querySelector('.fila1');
let barra2 = document.querySelector('.fila2');
let barra3 = document.querySelector('.fila3');

function animacionMenu() {
    barra1.classList.toggle('fila1Animation');
    barra2.classList.toggle('fila2Animation');
    barra3.classList.toggle('fila3Animation');
}