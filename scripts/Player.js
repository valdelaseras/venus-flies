import { Fly } from "./Fly.js";
import { Venus } from "./Venus.js";

export class Player {
    constructor( username, type ) {

        this.username = username;
        this.type = type;
        this.avatar = undefined;
        this.score = 20;
        this.health = 20;

        this.initAvatar();
    }

    initAvatar() {
        if ( this.type === Fly ) {
            this.avatar = new Fly();
        } else {
            this.avatar = new Venus();
        }
    }
}
