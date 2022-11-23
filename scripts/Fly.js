import { Player } from "./Player.js";

export class Fly extends Player {
    constructor( username ) {
        super( username );
        this.ctx = document.querySelector('canvas').getContext('2d');

        //@TODO: should not overlap with one another
        this.x = Math.random() * ( 1100 );
        this.y = Math.random() * ( 600 - 10 ) + 10;

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

    move( e ) {
        const speed = 20;
        console.log('move');
        if ( e.code === 'ArrowUp' ){
            this.y -= speed;
        } else if ( e.code === 'ArrowDown' ){
            this.y += speed;
        } else if ( e.code === 'ArrowLeft' ){
            this.x -= speed;
        } else if ( e.code === 'ArrowRight' ){
            this.x += speed;
        }

        // this.ctx.clearRect(0, 0, 1200, 800 );
        this.draw();
    }
}
