const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('lamp')


function isLampBroken() { 
   return lamp.src.indexOf('quebrada') > -1
}

function turnOn() {
    if (!isLampBroken()) {
    lamp.src = 'imgs/ligada.jpg'
    }
}

function turnOff() {
    if (!isLampBroken()) {
    lamp.src = 'imgs/desligada.jpg'
    }
}

function lampBroken() {
    lamp.src = 'imgs/quebrada.jpg'
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        turnOn();
        turnOnOff.textContent = 'Desligar'
    } else {
        turnOff();
        turnOnOff.textContent = 'Ligar'
    }
}

turnOnOff.addEventListener('click', lampOnOff)

lamp.addEventListener('mouseover', turnOn)
lamp.addEventListener('mouseleave', turnOff)
lamp.addEventListener('dblclick', lampBroken)