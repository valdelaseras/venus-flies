import { Match } from "./match.js";
import { Fly } from "./fly.js";
import { Venus } from "./venus.js";

let players = [
    {
        username: 'a',
        type: Fly,
    },
    {
        username: 'b',
        type: Fly,
    },
    {
        username: 'c',
        type: Venus,
    },
    {
        username: 'd',
        type: Venus,
    }
]

window.onload = () => { // not actually on load but after "lock in"
    new Match( players );
}
