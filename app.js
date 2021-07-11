require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));

app.get("/", function (req, res) {
  res.sendFile("/index.html");
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

app.listen(process.env.PORT || 8080, () => {
  console.log("Server started on Port 8080");
});
