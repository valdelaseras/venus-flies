export class Player {
    username: string;
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
}
