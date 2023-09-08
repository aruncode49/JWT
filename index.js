const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;

// create a secret key for jwt token
const secretKey = "mysecretkey49";

app.get("/", (req, res) => {
  res.send("<h1>Hello Server</h1>");
});

// create login post route for generatin token with user details
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

// Create profile route with a middleware function
app.post("/profile", verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.json({ error: "Token Mismatched" });
    } else {
      res.json(authData);
    }
  });
});

// Create a function to verify the token
function verifyToken(req, res, next) {
  const authToken = req.headers.auth;
  if (authToken) {
    req.token = authToken;
  } else {
    res.json({ err: "Invalid User" });
  }
  next();
}

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
