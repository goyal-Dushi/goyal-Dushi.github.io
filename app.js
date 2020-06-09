require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
bodyParser.urlencoded({extended: true});
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
})

// app.post('/',function(req,res){

//     var cust_email = req.body.email;
//     var cust_message = req.body.message;
//     var phone = req.body.phone;

//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         secure : true,
//         host : 'smtp.gmail.com',
//         auth: {
//           user: process.env.EMAIL,
//           pass: process.env.PASSWORD
//         }
//       });
      
//       let mailOptions = {
//         from: cust_email,
//         to : process.env.EMAIL,
//         subject : cust_message,
//         text:"<h1>Contact details</h1> <br> <h2> email: "+ cust_email+"</h2><br> <h2> phone number: "+ phone+" </h2> <br> <h2> message: "+ cust_message+"</h2> </html>"
//       };

//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//         //   console.log(error);
//           res.send(error);
//         } else {
//             // res.send(document.getElementById('alertId').classList.remove('hide'));
//           console.log('Email sent : ' + info.response);
          
//           res.send( 'email sent') ;
//         // res.render('index.html');
//         }
//       });
//       transporter.close();
// })

app.listen(process.env.PORT || 8080);{
    console.log("Server running on Port 8080")
}