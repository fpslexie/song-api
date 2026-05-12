const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let currentSong = "Nothing playing";

app.post("/scrobble", (req, res) => {
    const { artist, track } = req.body;

    if (!track) return res.sendStatus(400);

    currentSong = artist ? `${artist} - ${track}` : track;

    console.log("🎵", currentSong);

    res.sendStatus(200);
});

app.get("/song", (req, res) => {
    res.send(currentSong);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("running");
});
