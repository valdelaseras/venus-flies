import { Controller } from "./controller.js";

export class Match {
    constructor( players ) {

        this.controller = new Controller( players );
    }
}

