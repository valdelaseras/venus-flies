export class Venus {
    constructor() {
        this.ctx = document.querySelector('canvas').getContext('2d');
        this.x = Math.random() * ( 1000 ); //@TODO: should not overlap with one another

        this.height = 100;

        this.init();
    }

    init() {
        this.setInitialPosition();
        this.draw();
    }

    setInitialPosition() {
        this.ctx.moveTo( this.x, 800 - this.height );
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillRect( this.x - 5, 800 - this.height, 10, this.height );
        this.ctx.arc( this.x, 800 - this.height, 40, 0, Math.PI );
        this.ctx.arc( this.x, 800 - this.height , 40, 0, Math.PI );
        this.ctx.fill();
    }

    chomp() {
        console.log('chomp');
    }
}
