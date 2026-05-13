const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let currentSong = "Nothing playing";

app.post("/update", (req, res) => {

    const { artist, track } = req.body;

    if (track) {
        currentSong = artist
            ? `${artist} - ${track}`
            : track;

        console.log("Updated:", currentSong);
    }

    res.sendStatus(200);
});

app.get("/song", (req, res) => {
    res.send(currentSong);
});

app.get("/", (req, res) => {
    res.send("Song API running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running");
});
