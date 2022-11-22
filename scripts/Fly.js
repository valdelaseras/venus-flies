export class Fly {
    constructor() {
        this.ctx = document.querySelector('canvas').getContext('2d');
        this.x = Math.random() * ( 1000 );
        this.y = Math.random() * ( 600 );

        this.init();
    }

    init(){
        this.setInitialPosition();
        this.draw();
    }

    setInitialPosition(){
        this.ctx.moveTo( this.x, this.y );
        this.draw( this.x, this.y );
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc( this.x, this.y, 6, 0, 2 * Math.PI )
        this.ctx.fill();
    }

    move() {
        console.log('move');
    }
}
