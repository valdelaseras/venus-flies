import { WebSocketService } from "./WebSocketService";
import { Player } from "./Player";
import { CLobby } from "./components/c-lobby";
import { CWaitingRoom } from "./components/c-waiting-room";
import { CCanvas } from "./components/c-canvas";

enum APPLICATION_STATE {
    LOBBY,
    WAITING_ROOM
}

export class Controller {
    slot: HTMLElement;
    appState = APPLICATION_STATE.LOBBY;
    lobby: CLobby | undefined;
    waitingRoom: CWaitingRoom | undefined;
    canvas: CCanvas | undefined;
    player: Player | undefined;
    players: Player[] = [];
    socket: WebSocketService;

    constructor() {
        this.slot = document.querySelector('.slot')!;

        // canvas context
        // this.ctx = document.querySelector('canvas').getContext('2d');
        // document.addEventListener('keydown', this.handleKeydown.bind(this));

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
        this.lobby = ( document.createElement('c-lobby') as CLobby );
        this.slot.appendChild( this.lobby );
        this.lobby.buildTemplate();

        document.addEventListener('lockIn', this.lobbyHandler.bind(this) );
    }

    lobbyHandler() {
        this.player = new Player(
            ( document.querySelector('#username') as HTMLInputElement ).value,
            Array.from<HTMLInputElement>( document.querySelectorAll('input[name="avatar"]')).find(( option ) => option.checked )!.value
        );

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
        this.appState = APPLICATION_STATE.WAITING_ROOM;
        this.waitingRoom = ( document.createElement('c-waiting-room') as CWaitingRoom );
        this.slot.appendChild( this.waitingRoom );
        this.waitingRoom.buildTemplate();
    }

    playerListHandler( playerList: Player[] ){
        if ( this.appState !== APPLICATION_STATE.WAITING_ROOM ) return;

        this.players = playerList;
        ( this.waitingRoom as CWaitingRoom ).listPlayers( this.players );
    }

    lockInHandler( player: Player ) {
        if ( this.appState !== APPLICATION_STATE.WAITING_ROOM ) return;

        this.players.push( player );
        ( this.waitingRoom as CWaitingRoom ).listPlayers( this.players );
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
