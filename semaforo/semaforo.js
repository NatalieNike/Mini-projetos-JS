const estado_semaforo = document.getElementById('imgSemaforo')
const buttons = document.getElementById('buttons-section')


const turnOn = {
    'red': () => img.src = 'imgs/vermelho.png' 
}

buttons.addEventListener('click', trafficLight)