export class Player {
    constructor( username ) {
        this.username = username;
        this.avatar = "";
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
