const express = require("express");
const path = require("path");
const nodemailer = require('nodemailer');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));
const TEST_PORT = 8080;

async function sendEmail(body){
  try{
    const {email, username, subject, message} = body;
  const pwd = process.env.MAIL_PWD;

  const transporter = await nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587, // true for 465, false for other ports
    auth: {
      user: "dushyantgoyal28@gmail.com", // generated ethereal user
      pass: process.env.ETHREAL_PWD, // generated ethereal password
    },
  });

  const mailOptions = {
    from: email,
    to: "dushyantgoyal28@gmail.com",
    subject,
    text: `<p> message </p>`
  };

  await transporter.sendMail(mailOptions, (err, info)=> {
    if(err){
      throw Error();
    }else{
      res.redirect('/').then(() => {
        window.alert('Email Send Successfully!');
      });
    }
  })

  } catch(err){
    console.error(err);
    window.alert('Sorry, but Email could not be send. Pls try again later!');
  }
}

app.route('/').get(function (req, res) {
  res.sendFile("/index.html");
}).post(async (req, res) => {
  await sendEmail(req.body);
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
