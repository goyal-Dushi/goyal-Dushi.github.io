require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
bodyParser.urlencoded({extended: true});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname+"/public")));

app.get('/', function(req, res){
    res.sendFile('/index.html');
})

app.listen(process.env.PORT || 8080);{
    console.log("Server running on Port 8080")
}
