const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get("/players", (req,res) => {
    const players = [
        {
            username: "a",
            type: "fly",
        },
        {
            username: "b",
            type: "fly",
        },
        {
            username: "c",
            type: "fly",
        },
        {
            username: "d",
            type: "venus",
        },
        {
            username: "e",
            type: "venus",
        },
        {
            username: "f",
            type: "venus",
        }
    ];

    res.json(players);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

