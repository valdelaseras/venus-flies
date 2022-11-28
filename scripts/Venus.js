import {Player} from "./Player.js";

export class Venus extends Player {
    constructor( player ) {
        super( player );

        this.player = player;

        this.ctx = document.querySelector('canvas').getContext('2d');
        this.height = 100;

        this.init();
    }

    init() {
        this.draw();
    }

    draw(){
        this.ctx.moveTo(
            this.player.position.x,
            800 - this.height );
        this.ctx.beginPath();
        this.ctx.fillRect(
            this.player.position.x - 5,
            800 - this.height,
            10,
            this.height
        );
        this.ctx.arc(
            this.player.position.x,
            800 - this.height,
            40,
            0,
            Math.PI );
        this.ctx.fill();
    }

    chomp() {
        console.log('chomp');
    }
}
