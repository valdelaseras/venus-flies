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
        <c-instructions></c-instructions>
    </div>
</div>
`;

export class CLobby extends HTMLElement {
    constructor() {
        super();

        this.addEventListener('click', this.handleClick.bind(this));
    }

    buildTemplate() {
        this.innerHTML = CLOBBY_TEMPLATE;
    }

    handleClick( e ) {
        if ( e.target === this.querySelector('button') ) {
            const lockIn = new Event('lockIn', { bubbles: true });
            this.dispatchEvent(lockIn);
        }
    }
}

customElements.define('c-lobby', CLobby );
