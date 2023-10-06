const express = require("express");
const path = require("path");
const nodemailer = require('nodemailer');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));
const TEST_PORT = 8080;

app.route('/').get(function (req, res) {
  res.sendFile("/index.html");
}).post((req, res) => {
  const {email, username, subject, message} = req.body;
  const pwd = process.env.MAIL_PWD;
  console.log('pwd: ',pwd);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587, // true for 465, false for other ports
    auth: {
      user: "dushyantgoyal28@gmail.com", // generated ethereal user
      pass: "uovjwjrighazeoay", // generated ethereal password
    },
  });

  const mailOptions = {
    from: email,
    to: "dushyantgoyal28@gmail.com",
    subject,
    text: message
  };

  transporter.sendMail(mailOptions, (err, info)=> {
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
      console.log(info);
    }
  })
});

app.get("/download", function (req, res) {
  res.download(
    __dirname + "/upload_folder/Resume.pdf",
    "Dushyant_Resume.pdf",
    (error) => {
      console.log("Error :", error);
    }
  );
});

app.listen(process.env.PORT || TEST_PORT, () => {
  console.log("Server started on Port 8080");
});
