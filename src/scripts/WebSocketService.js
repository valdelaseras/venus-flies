export class WebSocketService {
    constructor(
        lockInHandler,
        waitingRoomHandler,
        playerIsReadyHandler ) {
        this.ws = new WebSocket("ws://localhost:3000");
        this.ws.onmessage = this.onMessage.bind( this );

        this.lockInHandler = lockInHandler;
        this.waitingRoomHandler = waitingRoomHandler;
        this.playerIsReadyHandler = playerIsReadyHandler;
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
                this.waitingRoomHandler( parsedMessage.content );
                break;
            case 'playerIsReady':
                this.playerIsReadyHandler( parsedMessage.content );
                break;
        }
    }

    onClose(){
        console.log(`[close]`);

        this.ws.onclose = ( e ) => {
            console.log(`[close] ${e}`);
        }
    }

    onError() {
        console.log(`[error]`);

        this.ws.onerror = ( e ) => {
            console.log(`[error] ${e}`);
        }
    }
}
