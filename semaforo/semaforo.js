const img = document.getElementById('imgSemaforo')
const buttons = document.getElementById('buttons-section')
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    let colorIndex = colors[Math.floor(Math.random()*colors.length)]
    turnOn[colorIndex]();
    
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red': () => img.src = 'imgs/vermelho.png',
    'yellow': () => img.src = 'imgs/amarelo.png',
    'green': () => img.src = 'imgs/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}


buttons.addEventListener('click', trafficLight)