const express = require("express");
const path = require("path");
const nodemailer = require('nodemailer');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, "/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
  });

}

const PORT = process.env.PORT || 8080;

async function sendEmail(body){
  try{
    const {email, subject, message} = body;
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "dushyantgoyal28@gmail.com",
        pass: process.env.MAIL_PWD,
      },
    });

    const mailOptions = {
      from: email,
      to: "dushyantgoyal28@gmail.com",
      subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return { message: 'Email send successfully!' };
  } catch(err){
    throw new Error({ message: 'Some issue encountered while sending email!', err });
  }
}

app.post('/api/sendEmail', async (req, res) => {
  try{
    const response = await sendEmail(req.body);
    res.status(200).json(response);
  } catch(err){
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log("Server started on Port ", PORT);
});
