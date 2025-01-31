const img = document.getElementById('imgSemaforo')
const buttons = document.getElementById('buttons-section')

const trafficLight = (event) => {
    let cor = event.target.id 
    if (cor == 'red') {
        turnOn.red()
    } else if (cor == 'yellow') {
        turnOn.yellow()
    } else if (cor == 'green') {
        turnOn.green()
    }
}

const turnOn = {
    'red': () => img.src = 'imgs/vermelho.png',
    'yellow': () => img.src = 'imgs/amarelo.png',
    'green': () => img.src = 'imgs/verde.png'
}


buttons.addEventListener('click', trafficLight)