class Background {
    constructor(canvas) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.imagenClaro = new Image();
        this.imagenOscuro = new Image();
        this.switchClaro = new Switch(125,183,900,300, 'res/switchClaro.png')
        this.switchClaro = new Switch(125,183,900,300, 'res/switchOscuro.png')
        this.imagenClaro.src = 'res/claro.png';
        this.imagenOscuro.src = 'res/oscuro.png';
        this.context = canvas.getContext('2d');
    }

    /**
     * 
     * @param {MouseEvent} e 
     * @returns void
     */
    colocarImagen(e) {
        const x = e.clientX;
        const y = e.clientY;
        if (x > 400 && x < 500) {
            
            this.context.drawImage(this.imagenClaro, 0, 0, this.width, this.height);
            return;
        }
        this.context.drawImage(this.imagenOscuro, 0, 0, this.width, this.height);
    }
}

class Switch{
    constructor(width, height, xPosition, yPosition, src){
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
background.context.drawImage(background.imagenOscuro, 0, 0, background.width, background.height);



window.addEventListener('mouseup', (e) => background.colocarImagen(e));
