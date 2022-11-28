export class Controller {
    constructor() {
        this.slot = document.querySelector('.slot');
        this.ctx = document.querySelector('canvas').getContext('2d');

        document.addEventListener('keydown', this.handleKeydown.bind(this));
    }

    init(){}

    startMatch(){}

    updateGameScore(){}

    displayMatchOver(){}

    displayRematchVote(){}

    displayGameOver(){}

    handleEndOfMatch(){}

    handleEndOfGame(){}

    positionMatched(){}

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
}
