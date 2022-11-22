import { Venus } from "./venus.js";
import { Fly } from "./fly.js";
import { Player } from "./player.js";

export class Controller {
    constructor( players ) {

        this.players = players;
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.username = 'd'; //@TODO

        this.initPlayers();

        document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    initPlayers() {
        this.players.forEach(( player, index ) => {
            if ( player.type === Fly ) {
                player.avatar = new Fly( 20 + index * 100, 20, this.ctx );
            } else {
                player.avatar = new Venus( 20 + index * 100, this.ctx, this.canvas );
            }
        })
    }

    handleKeydown( e ) {
        const player = this.players.find( player => player.username === this.username );

        if ( player.type === Venus ) {
            if ( e.code === 'Space') {
                player.avatar.chomp();
            }
        } else {
            if ( e.code === 'ArrowUp' || e.code === 'ArrowDown' ||
                 e.code === 'ArrowRight' || e.code === 'ArrowLeft' ){
                player.avatar.move();
            }
        }
    }
}
