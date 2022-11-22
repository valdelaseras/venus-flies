export class Fly {
    constructor( x, y, ctx ) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;

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
