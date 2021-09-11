const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));
const TEST_PORT = 8080;

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

app.listen(process.env.PORT || TEST_PORT, () => {
  console.log("Server started on Port 8080");
});
