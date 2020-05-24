const express = require("express");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const path = require("path")

const app = express();
bodyParser.urlencoded({extended: true});


app.use(express.static("public"));
app.use(favicon(path.join(__dirname, 'public','images', 'favicon.ico')));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
})

app.listen(8080);{
    console.log("Server running on Port 8080")
}