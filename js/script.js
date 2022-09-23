class Background {

    constructor(canvas) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.imagenClaro = new Image();
        this.imagenOscuro = new Image();
        this.switchClaro = new Switch(25, 33, 900, 300, 'res/switchClaro.png')
        this.switchOscuro = new Switch(25, 33, 900, 300, 'res/switchOscuro.png')
        this.imagenClaro.src = 'res/claro.png';
        this.imagenOscuro.src = 'res/oscuro.png';
        this.context = canvas.getContext('2d');
        this.bandera = true;
    }

    /**
     * 
     * @param {MouseEvent} e 
     * @returns void
     */
    colocarImagen(e) {
        const x = e.clientX;
        const y = e.clientY;
        const tocoX = x > this.switchClaro.x && x < (this.switchClaro.x + this.switchClaro.width);
        const tocoY = y > this.switchClaro.y && y < (this.switchClaro.y + this.switchClaro.height);
        if (tocoX && tocoY) {
            this.bandera = !this.bandera;
            if(this.bandera){
                this.context.clearRect(0, 0, this.width, this.height);
                this.context.drawImage(this.imagenClaro, 0, 0, this.width, this.height);
                this.context.drawImage(this.switchClaro.img, this.switchClaro.x, this.switchClaro.y, this.switchClaro.width, this.switchClaro.height);
                console.table(this.switchClaro);
                return;
            }
            this.context.clearRect(0, 0, this.width, this.height);
            this.context.drawImage(this.imagenOscuro, 0, 0, this.width, this.height);
            this.context.drawImage(this.switchOscuro.img, this.switchOscuro.x, this.switchOscuro.y, this.switchOscuro.width, this.switchOscuro.height);
        }
    }
}

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

const background = new Background(canvas);


background.context.imageSmoothingEnabled = false;
background.context.imageSmoothingQuality = "high";

window.addEventListener('mouseup', (e) => background.colocarImagen(e));

background.context.drawImage(background.imagenOscuro, 0, 0, background.width, background.height);




