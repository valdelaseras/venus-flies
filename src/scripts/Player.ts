export enum PLAYER_STATE {
    UNDEFINED,
    LOCKED_IN,
    READY,
    DEAD,
    DISQUALIFIED
}

export class Player {
    id: string;
    username: string;
    state = PLAYER_STATE.UNDEFINED;
    avatar: string;
    score: number;
    health: number;
    position: {
        x: number;
        y: number
    };

    constructor(
        username: string,
        avatar: string
    ) {
        this.id = Player.generateId( 10 );
        this.username = username;
        this.avatar = avatar;
        this.score = 20;
        this.health = 20;
        this.position = {
            x: 0,
            y: 0
        }
    }

    action(){}
    draw(){}

    private static generateId( length: number ) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
