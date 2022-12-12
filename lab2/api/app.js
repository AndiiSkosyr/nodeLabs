require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {

    res.send("Hello World");
});

app.get("/user", (req, res) => {

    res.send({name: process.env.NAME, age: process.env.AGE, favourite_team: process.env.TEAM});
});

app.listen(3000);
