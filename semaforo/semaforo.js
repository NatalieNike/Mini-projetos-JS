const red = document.getElementById('red') 
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')

const estado_semaforo = document.getElementById('imgSemaforo')

function turnRed() {
    estado_semaforo.src = 'imgs/vermelho.png'
}

function turnYellow() {
    estado_semaforo.src = 'imgs/amarelo.png'
}

function turnGreen() {
    estado_semaforo.src = 'imgs/verde.png'
}

red.addEventListener('click', turnRed)
yellow.addEventListener('click', turnYellow)
green.addEventListener('click', turnGreen)