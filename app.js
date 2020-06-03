const express = require("express");
// import {express} from "express";
const bodyParser = require("body-parser");
// import {bodyParser} from "body-parser";
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
bodyParser.urlencoded({extended: true});
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
})

app.post('/posted',function(req,res){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dushyantgoyal28@gmail.com',
          pass: 'Dushi@123$'
        }
      });
      
      var mailOptions = {
        from: req.body.email,
        to : 'dushyantgoyal28@gmail.com',
        message : req.body.message,
        html:"<h1>Contact details</h1> <br> <h2> email:{req.body.email} </h2><br> <h2> phone number:{req.body.phone} </h2> <br> <h2> message:{req.body.message} </h2> </html>"
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.send(error)
        } else {
            res.send(document.getElementById('alertId').classList.remove('hide'));
          console.log('Email sent : ' + info.response);
        //   res.send( 'email sent') ;
        res.redirect(__dirname+'index.html');
        }
      });
      transporter.close();
})

app.listen(8080);{
    console.log("Server running on Port 8080")
}