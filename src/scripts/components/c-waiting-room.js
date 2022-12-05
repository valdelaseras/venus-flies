const CWAITING_ROOM_TEMPLATE = `
<div class="column">
    <div class="column two">
        <div class="content">
            <div class="waiting-room">
                <div class="column">
                    <div class="content">
                        <p>Waiting for players...</p>
                        <ul></ul>
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
    }

    buildTemplate(){
        this.innerHTML = CWAITING_ROOM_TEMPLATE;
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
        this.querySelector('ul').appendChild( li );
    }
}

customElements.define('c-waiting-room', CWaitingRoom );
