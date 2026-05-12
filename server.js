const express = require("express");
const app = express();

app.use(express.json());

let currentSong = "Nothing playing";

app.post("/update", (req, res) => {
    const { artist, track } = req.body;

    if (artist && track) {
        currentSong = `${artist} - ${track}`;
        console.log("Updated:", currentSong);
    }

    res.sendStatus(200);
});

app.get("/song", (req, res) => {
    res.send(currentSong);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running");
});
