const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");
require("dotenv").config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "signup.html"));
});

app.post("/", function (req, res) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname,
        },
      },
    ],
  };

  const jsondata = JSON.stringify(data);
  const url = "https://us21.api.mailchimp.com/3.0/lists/f075633a76";

  const options = {
    method: "POST",
    auth: `vaisha:${process.env.MAILCHIMP_API_KEY}`,

  };
  const request = https.request(url, options, function (response) {
    let responseData = "";

    response.on("data", function (data) {
      responseData += data;
    });

    response.on("end", function () {
      if (response.statusCode === 200) {
        res.sendFile(path.join(__dirname, "success.html"));
      } else {
        console.log("API Request failed:", response.statusCode);
        console.log("API Response:", responseData);
        res.sendFile(path.join(__dirname, "failure.html"));
      }
    });
  });

  request.write(jsondata);
  request.end();
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.post("/success", function (req, res) {
  res.redirect("https://www.bombaytimes.com/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started");
});



