import { Match } from "./Match.js";
import { Fly } from "./Fly.js";
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
        type: Fly,
    },
    {
        username: 'd',
        type: Venus,
    },
    {
        username: 'e',
        type: Venus,
    },
    {
        username: 'f',
        type: Venus,
    }
]

window.onload = () => { // not actually on load but after "lock in"
    new Match( players );
}
