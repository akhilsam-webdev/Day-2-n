const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to / route");
});

app.get("/about", (req, res) => {
  res.send("welcome to Aboute page");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
