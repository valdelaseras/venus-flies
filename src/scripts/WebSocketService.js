export class WebSocketService {
    constructor( lockInHandler, playerListHandler ) {
        this.ws = new WebSocket("ws://localhost:3000");

        this.ws.onmessage = this.onMessage.bind( this );
        this.lockInHandler = lockInHandler;
        this.playerListHandler = playerListHandler;
    }

    send( data ) {
        console.log(`[send]`);

        this.ws.send( JSON.stringify( data ));
    }

    onMessage( e ) {
        console.log(`[message]`);

        const parsedMessage = JSON.parse( e.data );

        switch( parsedMessage.type ) {
            case 'lockIn':
                const player = parsedMessage.content;
                this.lockInHandler( player );
                break;
            case 'playerList':
                this.playerListHandler( parsedMessage.content );
                break;
        }
    }

    onClose(){
        console.log(`[close]`);

        this.ws.onclose = ( e ) => {
            console.log(`[close] ${e.data}`);
        }
    }

    onError() {
        console.log(`[error]`);

        this.ws.onerror = ( e ) => {
            console.log(`[error] ${e.data}`);
        }
    }
}
