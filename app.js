const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("HOME");
});

app.listen(5000);
