require('dotenv').config();
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname+"/public")));

app.get('/', function(req, res){
    res.sendFile('/index.html');
})

app.listen(process.env.PORT || 8080);{
    console.log("Server running on Port 8080")
}
