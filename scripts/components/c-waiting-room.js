const CWAITING_ROOM_TEMPLATE = `
<div class="column">
    <div class="column two">
        <div class="content">
            <div class="waiting-room">
                <div class="column">
                    <div class="content">
                        <p class="player-information"></p>
                        
                        <p>
                            Waiting for other players...
                        </p>
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

    buildTemplate( username, avatar ){
        this.innerHTML = CWAITING_ROOM_TEMPLATE;
        this.querySelector('.player-information').innerText = `You are playing as ${username}, the ${avatar}`;
    }
}

customElements.define('c-waiting-room', CWaitingRoom );
