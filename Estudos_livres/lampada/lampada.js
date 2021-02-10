const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken (){
    return lamp.src.indexOf ( 'lampadaQuebrada' ) > -1;
}

function lampOn () {
    if (!isLampBroken ()) {
    lamp.src = './img/lampadaAcesa.jpg';
    }
}

function lampOff () {
    if (!isLampBroken ()) {
    lamp.src = './img/lampadaApagada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/lampadaQuebrada.jpg';
}




turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);