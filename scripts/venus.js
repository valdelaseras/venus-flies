export class Venus {
    constructor( x, ctx, canvas ) {
        this.x = x;
        this.ctx = ctx;
        this.canvas = canvas;

        this.height = 100;

        this.init();
    }

    init() {
        this.setInitialPosition();
        this.draw();
    }

    setInitialPosition() {
        this.ctx.moveTo( this.x, this.canvas.height - this.height );
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillRect( this.x - 5, this.canvas.height - this.height, 10, this.height );
        this.ctx.arc( this.x, this.canvas.height - this.height, 40, 0, Math.PI );
        this.ctx.arc( this.x, this.canvas.height - this.height , 40, 0, Math.PI );
        this.ctx.fill();
    }

    chomp() {
        console.log('chomp');
    }
}
