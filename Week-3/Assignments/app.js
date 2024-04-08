const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Assignment 3-1
app.use(express.static("public"));
app.use(cookieParser("cookie is yummy")); //安全的做法是用.env儲存secret_key，例如:process.env.COOKIE_SECRET

//Assignment 1-5
app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

//Assignment 2-1 ~ 2-4
app.get("/data", (req, res) => {
  const number = parseInt(req.query.number);

  if (!req.query.number) {
    res.send("Lack of Parameter");
  } else if (isNaN(number)) {
    res.send("Wrong Parameter");
  } else {
    const sum = (number * (number + 1)) / 2;
    res.send(`${sum}`);
  }
});

//Assignment 3-4
app.get("/formHandling", (req, res) => {
  res.send("你輸入的數字為" + req.query.number);
});

//Assignment 4-1 , 4-2
app.get("/myName", (req, res) => {
  if (req.signedCookies.yourCookie === undefined) {
    res.sendFile(__dirname + "/cookies.html");
  } else {
    res.send("你的cookie是" + req.signedCookies.yourCookie);
    console.log(req.signedCookies);
  }
});

//Assignment 4-3 ~ 4-5
app.get("/trackName", (req, res) => {
  const name = req.query.name;
  res.cookie("yourCookie", name, { signed: true });
  res.redirect("/myName");
});

app.listen(3000, () => {
  console.log("server running on port 3000...");
});
