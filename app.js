const express = require("express");
const app = express();

app.use("/post", () => {
    console.log("we are useing middlewere");
});

app.get("/", (req, res) => {
    res.send("HOME");
});

app.get("/post", (req, res) => {
    res.send("POST");
});

app.listen(5000);
