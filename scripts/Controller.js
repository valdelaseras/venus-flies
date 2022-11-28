export class Controller {
    constructor() {
        // content slot
        this.slot = document.querySelector('.slot');

        // canvas context
        this.ctx = document.querySelector('canvas').getContext('2d');

        this.init();

        document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    init(){}

    startMatch(){
        // init match
    }

    endMatch(){
        this.displayMatchOver();
    }

    endGame(){
        this.displayGameOver();
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

        this.clearCanvas();
        player.draw();
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, 1200, 800 );
    }

    displayMatchOver(){
    //     this.slot.innerHTML = `
    //         <c-scoreboard class="c-scoreboard"/>
    //         <c-rematch-vote class="c-rematch-vote"/>
    //     `;
    }

    displayGameOver(){
    //     clear slot
    //     for every match in Game:
    //     this.slot.append = `<c-scoreboard class="c-scoreboard"></c-scoreboard>`;
    //     this.slot.append = `back to lobby`;
    }
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
