require('dotenv').config;
const express = require('express');
var conf = require('../service/config.js');
const axios = require('axios');
const { request, response } = require('express');
const route = express.Router();
var app = express();

app.use("/", route);

route.get("/", (request, response) => {
    response.redirect(conf.get('url'));
});
module.exports = app;