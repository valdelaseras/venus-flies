import {Venus} from "./Venus.js";
import {Fly} from "./Fly.js";

export class Controller {
    constructor( players ) {
        this.players = this.initPlayers( players );

        this.player = 'b'; //@TODO

        document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    initPlayers( players ) {
        return players.map(( { type, username} ) => type === 'fly' ? new Fly( username ) : new Venus( username ));
    }

    handleKeydown( e ) {
        const player = this.players.find( player => player.username === this.player );

        if ( e.code === 'Space') {
            player.chomp();
        }

        if ( e.code === 'ArrowUp' || e.code === 'ArrowDown' ||
             e.code === 'ArrowRight' || e.code === 'ArrowLeft' ){
            player.move( e );
        }
    }
}
