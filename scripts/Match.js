import {Fly} from "./Fly.js";
import {Venus} from "./Venus.js";
import {Player} from "./Player.js";

export class Match {
    constructor( players ) {
        this.players = players;
        this.score = {
            venus: 0,
            fly: 0
        }

        this.init();
    }

    init() {}

    initPlayers() {
        return this.players.map(( { avatar, username } ) => {
            if ( avatar === 'fly') {
                new Fly( username )
            } else {
                new Venus( username )
            }
        })
    }

    positionPlayers() {
        this.players.map(( { avatar, username }) => {
            if ( avatar === 'fly' ){
                this.randomizeInitialFlyPosition( username );
            } else {
                this.randomizeInitialVenusPosition( username );
            }
        })
    }

    randomizeInitialFlyPosition( username ){
        username.position.x = Math.random() * ( 1100 );
        username.position.y = Math.random() * ( 600 - 10 ) + 10;
    }

    randomizeInitialVenusPosition( username ){
        username.position.x = Math.random() * ( 1100 - 100 ) + 100;
    }

    handleScore(){}
}

