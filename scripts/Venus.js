export class Venus {
    constructor() {
        this.ctx = document.querySelector('canvas').getContext('2d');

        this.height = 100;

        this.init();
    }

    init() {
        this.setInitialPosition();
        this.draw();
    }

    setInitialPosition() {
        this.ctx.moveTo( 20, 800 - this.height );
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillRect( 20 - 5, 800 - this.height, 10, this.height );
        this.ctx.arc( 20, 800 - this.height, 40, 0, Math.PI );
        this.ctx.arc( 20, 800 - this.height , 40, 0, Math.PI );
        this.ctx.fill();
    }

    chomp() {
        console.log('chomp');
    }
}
