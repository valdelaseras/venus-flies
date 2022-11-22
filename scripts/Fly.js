export class Fly {
    constructor() {
        this.ctx = document.querySelector('canvas').getContext('2d');

        this.init();
    }

    init(){
        this.setInitialPosition();
        this.draw();
    }

    setInitialPosition(){
        this.ctx.moveTo( 20, 20 );
        this.draw( 20, 20 );
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc( 20, 20, 6, 0, 2 * Math.PI )
        this.ctx.fill();
    }

    move() {
        console.log('move');
    }
}
