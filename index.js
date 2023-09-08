const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

// create a secret key for jwt token
const secretKey = "mysecretkey49";

app.get("/", (req, res) => {
  res.send("<h1>Hello Server</h1>");
});

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    username: "Arun Kumar",
    email: "aruncode49@gmail.com",
  };

  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    if (err) throw err;
    console.log("Token:-> ", token);
    res.json(user);
  });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
