import { Venus } from "./venus.js";
import { Fly } from "./fly.js";
import { Player } from "./player.js";

export class Controller {
    constructor( players ) {
        this.players = this.initPlayers( players );

        this.player = 'a'; //@TODO

        document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    initPlayers( players ) {
        return players.map(( player ) => new Player( player.username, player.type ))
    }

    handleKeydown( e ) {
        const player = this.players.find( player => player.username === this.player );

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
