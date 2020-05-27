const express = require("express");
// import {express} from "express";
const bodyParser = require("body-parser");
// import {bodyParser} from "body-parser";
const path = require("path");

const app = express();
bodyParser.urlencoded({extended: true});

app.use(express.static("public"));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
})

app.listen(8080);{
    console.log("Server running on Port 8080")
}