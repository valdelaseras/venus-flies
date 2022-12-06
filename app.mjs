import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';

// port to bind to
const port = 3000;

// init express
const app = express();

// init simple http server
const server = http.createServer(app);

// init websocket service instance
const wss = new WebSocketServer({ server });

const players = [];

const broadcast = ( message, originalSender ) => {
    wss.clients.forEach( client => {
        if ( client !== originalSender ) {
            // we just pass the received message along to all clients (except the original sender)

            client.send(
                message, // no need to stringify the original message which was already a string
                {
                    binary: false
                }
            );
        }
    });
};

wss.on( 'connection', ( ws ) => {
    // listen to messages from the newly connected client (ws)

    ws.on('message', ( message ) => {
        // we have received a message from the client, do something with it

        console.log(JSON.parse( message ));

        const parsedMessage = JSON.parse( message );

        switch( parsedMessage.type ) {
            case 'lockIn':
                players.push( parsedMessage.content );

                const playerList = {
                    type: 'playerList',
                    content: players
                };

                ws.send( JSON.stringify( playerList ) );
                broadcast( message, ws );
                break;
            case 'playerIsReady':
                broadcast( message, ws );
                break;
        }
    });
});

server.listen( port, () => console.log(`Example app listening on port ${port}!`));
