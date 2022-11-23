import { Controller } from "./Controller.js";
import { fetchPlayers } from "./service.js";

export class Match {
    constructor() {
        this.init();
    }

    init() {
        fetchPlayers().then((data) => new Controller( data ));
    }
}

