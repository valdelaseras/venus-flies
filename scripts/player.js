export class Player {
    constructor( username, type, avatar ) {

        this.username = username;
        this.type = type;
        this.avatar = avatar;
        this.score = 20;
        this.health = 20;

        console.log(this);
    }
}
