const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const staticPath = path.join(__dirname , "../ASSIGNMENT(PIXELBRIDGE1)");
app.use(express.static(staticPath));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/about", (req,res) => {
    res.sendFile(__dirname + "/about.html");
})

app.get("/how-to-buy", (req,res) => {
    res.sendFile(__dirname + "/how-to-buy.html");
})

app.get("/buy-now", (req,res) => {
    res.sendFile(__dirname + "/buy-now.html");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
})
