class Switch {
    constructor(width = 0, height = 0, xPosition = 0, yPosition = 0, src = "") {
        this.img = new Image();
        this.img.src = src;
        this.width = width;
        this.height = height;
        this.x = xPosition;
        this.y = yPosition;
    }
}

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;
const imagenClaro = new Image();
const imagenOscuro = new Image();
const switchClaro = new Switch(25, 33, 900, 300, 'res/switchClaro.png')
const switchOscuro = new Switch(25, 33, 900, 300, 'res/switchOscuro.png')
imagenClaro.src = 'res/claro.png';
imagenOscuro.src = 'res/oscuro.png';
const context = canvas.getContext('2d');
let bandera = false;

/**
 * 
 * @param {MouseEvent} e 
 * @returns void
 */
function colocarImagen(e) {
    const x = e.clientX;
    const y = e.clientY;
    const tocoX = x > switchClaro.x && x < (switchClaro.x + switchClaro.width);
    const tocoY = y > switchClaro.y && y < (switchClaro.y + switchClaro.height);
    if (tocoX && tocoY) {
        bandera = !bandera;
    }
    if (bandera){
        context.clearRect(0, 0, width, height);
        context.drawImage(imagenClaro, 0, 0, width, height);
        context.drawImage(switchClaro.img, switchClaro.x, switchClaro.y, switchClaro.width, switchClaro.height);
        return;
    }
    context.clearRect(0, 0, width, height);
    context.drawImage(imagenOscuro, 0, 0, width, height);
    context.drawImage(switchOscuro.img, switchOscuro.x, switchOscuro.y, switchOscuro.width, switchOscuro.height);
}



context.imageSmoothingEnabled = false;
context.imageSmoothingQuality = "high";

window.addEventListener('mouseup', (e) => colocarImagen(e));