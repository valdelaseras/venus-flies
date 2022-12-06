const CWAITING_ROOM_TEMPLATE = `
<div class="column">
    <div class="column two">
        <div class="content">
            <div class="waiting-room">
                <div class="column">
                    <div class="column">
                        <div class="content">
                            <p>Waiting for other players...</p>          
                        </div>
                    </div>
                    <div class="column three">
                        <div class="content">
                            <ul></ul>
                        </div>
                    </div>
                    <div class="column three">
                        <div class="content">
                            <button type="button">I'm ready</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="column two">
        <div class="content">
            <c-instructions></c-instructions>
        </div>
    </div>
</div>
`;

export class CWaitingRoom extends HTMLElement {
    constructor() {
        super();

        this.addEventListener('click', this.handleClick.bind(this));
    }

    buildTemplate(){
        this.innerHTML = CWAITING_ROOM_TEMPLATE;
    }

    handleClick( e ) {
        if ( e.target === this.querySelector('button') ) {
            const playerIsReady = new Event('playerIsReady', { bubbles: true });
            this.dispatchEvent( playerIsReady );
            this.querySelector('button').disabled = true;
        }
    }

    playerIsReady( player ) {
        const listItems = this.querySelectorAll('li[data-player-id]');
        for ( let i = 0; i < listItems.length; i++ ){
            if ( listItems[i].getAttribute('data-player-id') === player.id ){
                listItems[i].style.color = 'green';
            }
        }
    }

    listPlayers( players ) {
        this.querySelector('ul').innerHTML = '';

        players.forEach( ( player ) => {
           this.listPlayer( player )
        });
    }

    listPlayer( player ) {
        const li = document.createElement('li');
        li.innerText = `${player.username} joined the match as ${player.avatar}`;
        li.setAttribute('data-player-id', player.id);
        this.querySelector('ul').appendChild( li );
    }
}

customElements.define('c-waiting-room', CWaitingRoom );
