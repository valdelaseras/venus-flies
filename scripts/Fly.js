import { Player } from "./Player.js";

export class Fly extends Player {
    constructor( player ) {
        super( player );

        this.player = player;

        this.ctx = document.querySelector('canvas').getContext('2d');

        this.init();
    }

    init(){
        this.draw();
    }

    jitter(){}

    draw(){
        this.ctx.moveTo(
            this.player.position.x,
            this.player.position.y
        );
        this.ctx.beginPath();
        this.ctx.arc(
            this.player.position.x,
            this.player.position.y,
            6,
            0,
            2 * Math.PI )
        this.ctx.fill();
    }

    move( e ) {
        const speed = 20;

        // @TODO: diagonal

        if ( e.code === 'ArrowUp' ){
            this.player.position.y -= speed;
        } else if ( e.code === 'ArrowDown' ){
            this.player.position.y += speed;
        } else if ( e.code === 'ArrowLeft' ){
            this.player.position.x -= speed;
        } else if ( e.code === 'ArrowRight' ){
            this.player.position.x += speed;
        }

        this.draw();
    }
}
