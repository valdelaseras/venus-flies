import { WebSocketService } from "./WebSocketService.js";

const APPLICATION_STATE = {
    LOBBY: 'Lobby',
    WAITING_ROOM: 'Waiting room'
};


export class Controller {
    constructor() {
        // content slot
        this.slot = document.querySelector('.slot');

        this.state = APPLICATION_STATE.LOBBY;

        this.lobby = undefined;
        this.waitingRoom = undefined;
        this.canvas = undefined;

        // canvas context
        // this.ctx = document.querySelector('canvas').getContext('2d');

        // document.addEventListener('keydown', this.handleKeydown.bind(this));
        this.player = {};
        this.players = [];

        this.init();
        this.socket = new WebSocketService(
            this.lockInHandler.bind( this ),
            this.playerListHandler.bind( this )
        );
    }

    init(){
        this.initLobby();
    }

    initLobby() {
        this.lobby = document.createElement('c-lobby');
        this.slot.appendChild( this.lobby );
        this.lobby.buildTemplate();

        document.addEventListener('lockIn', this.lobbyHandler.bind(this) );
    }

    lobbyHandler() {
        this.player = {
            username: document.querySelector('#username').value,
            avatar: Array.from( document.querySelectorAll('input[name="avatar"]')).find(( option) => option.checked ).value
        };

        const data = {
            type: 'lockIn',
            content: {
                username: this.player.username,
                avatar: this.player.avatar
            }
        }

        this.clearSlot();
        this.initWaitingRoom();

        this.socket.send( data )
    }

    initWaitingRoom(){
        this.state = APPLICATION_STATE.WAITING_ROOM;
        this.waitingRoom = document.createElement('c-waiting-room');
        this.slot.appendChild( this.waitingRoom );
        this.waitingRoom.buildTemplate();
    }

    playerListHandler( playerList ) {
        if ( this.state !== APPLICATION_STATE.WAITING_ROOM ) return;

        this.players = playerList;
        this.waitingRoom.listPlayers( this.players );
    }

    lockInHandler( player ) {
        if ( this.state !== APPLICATION_STATE.WAITING_ROOM ) return;

        this.players.push( player );
        this.waitingRoom.listPlayers( this.players );
    }

    // initCanvas(){
    //     const canvas = document.createElement('c-canvas');
    //     this.slot.appendChild( canvas );
    //     canvas.buildTemplate();
    // }

    clearSlot(){
        this.slot.innerHTML = '';
    }

    //
    // startMatch(){
    //     init match
    // }

    // endMatch(){
    //     this.displayMatchOver();
    // }
    //
    // endGame(){
    //     this.displayGameOver();
    // }

    // handleKeydown( e ) {
    //     const player = this.players.find( player => player.username === this.player );
    //
    //     if ( e.code === 'Space') {
    //         player.chomp();
    //     }
    //
    //     if ( e.code === 'ArrowUp' || e.code === 'ArrowDown' ||
    //          e.code === 'ArrowRight' || e.code === 'ArrowLeft' ){
    //         player.move( e );
    //     }
    //
    //     this.clearCanvas();
    //     player.draw();
    // }

    // clearCanvas() {
    //     this.ctx.clearRect(0, 0, 1200, 800 );
    // }

    // displayMatchOver(){
    //     this.slot.innerHTML = `
    //         <c-scoreboard class="c-scoreboard"/>
    //         <c-rematch-vote class="c-rematch-vote"/>
    //     `;
    // }

    // displayGameOver(){
    //     clear slot
    //     for every match in Game:
    //     this.slot.append = `<c-scoreboard class="c-scoreboard"></c-scoreboard>`;
    //     this.slot.append = `back to lobby`;
    // }

}

// updatePlayerScore( player ){
//     if ( player.avatar === 'venus' ) {
//         if ( this.venusChompedSuccessfully() ) {
//             player.health += 1;
//             player.score += 1;
//         }
//         if ( this.flyEscapedSuccessfully() ) {
//             player.health -= 1;
//             player.score -= 1;
//         }
//     } else {
//         if ( this.flyEscapedSuccessfully() ){
//             player.health += 1;
//             player.score += 1;
//         }
//         if ( this.venusChompedSuccessfully() ){
//             player.health -= 1;
//             player.score -= 1;
//         }
//     }
// }
//
// venusChompedSuccessfully(){
//     // return true if chomped && fly position was in hitbox
// }
//
// flyEscapedSuccessfully(){
//     // return true if fly got nectar && escaped hitbox
// }
