const CLOBBY_TEMPLATE = `
<div class="column">
    <div class="column two">
        <div class="column">
            <div class="column">
                <div class="content">
                    <!--@TODO: current player # + team choice-->
                </div>
            </div>
            <div class="column">
                <div class="content">
                    <form class="form">
                        <div class="form-group">
                            <label for="username" class="bold">Enter a username</label>
                            <input id="username" type="text"/>
                        </div>
                        <div class="form-group">
                            <label class="bold">Pick a team</label>
                            
                            <div class="radio-group horizontal">
                                <label for="venus">
                                    <input type="radio" 
                                           id="venus"
                                           name="avatar" 
                                           value="venus"
                                           checked/>Venus</label>
                                
                                <label for="fly">
                                    <input type="radio" 
                                           id="fly"
                                           name="avatar" 
                                           value="fly"/>Fly</label>
                            </div>
                            
                        </div>
                        <div class="form-action">
                            <button type="button">Lock in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="column two">
        <c-instructions class="c-instructions"></c-instructions>
    </div>
</div>
`;

const WAITING_ROOM_TEMPLATE = `
<div class="waiting-room">
    <div class="column">
        <div class="content">
            <p>
                Waiting for other players...
            </p>
<!--        @TODO: "loading element" of a fly jittering around-->
<!--        @TODO: display <locked in> of total players int-->
            <p class="player-information"></p>
        </div>
    </div>
</div>
`;

export class CLobby extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = CLOBBY_TEMPLATE;

        this.username = "";
        this.avatar = "";

        this.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick( e ) {
        if ( e.target === this.querySelector('button') ){
            this.username = this.getUsername();
            this.avatar = this.getAvatar();

            this.displayWaitingRoom();
        }
    }

    getUsername() {
        return this.querySelector('#username').value;
    }

    getAvatar() {
        return Array.from( this.querySelectorAll('input[name="avatar"]')).find(( option) => option.checked ).value;
    }

    displayWaitingRoom() {
        this.innerHTML = WAITING_ROOM_TEMPLATE;

        this.querySelector('.player-information').innerText = `You are playing as ${this.username}, the ${this.avatar}`;
    }
}

customElements.define('c-lobby', CLobby );
