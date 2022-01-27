require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const utils = require("./utils");

const app = express();

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const PORT = process.env.PORT || 4000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

var corsOptions = {
  origin: "*",
  credentials: "include",
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
};

// enable CORS
app.use(cors(corsOptions));

/**
 * app.get("/", (req, res) => {
  res.send("Hello Welcome to Rental House Management Server. ");
});
 */

const category = require("./categories");

app.get("/categories", async (req, res) => {
  console.log("House Categories");
  let result = await category(req.headers);
  res.send(result);
});
app.post("/categories", (req, res) => {
  const incoming = req.body;
  category.push(incoming);
  res.json(category);
});

const houses = require("./houses");
app.get("/houses", async (req, res) => {
  console.log("Houses");
  let result = await houses(req.headers);
  res.send(result);
});
app.post("/houses", (req, res) => {
  const incoming = req.body;
  houses.push(incoming);
  res.json(houses);
});

const payments = require("./payments");
app.get("/payments", async (req, res) => {
  console.log("Payments");
  let result = await payments(req.headers);
  res.send(result);
});
app.post("/payments", (req, res) => {
  const incoming = req.body;
  payments.push(incoming);
  res.json(payments);
});

const settings = require("./settings");
app.get("/settings", async (req, res) => {
  console.log("System Settings");
  let result = await settings(req.headers);
  res.send(result);
});
app.post("/settings", (req, res) => {
  const incoming = req.body;
  settings.push(incoming);
  res.json(settings);
});

const tenants = require("./tenants");
app.get("/tenants", async (req, res) => {
  console.log("Tenants");
  let result = await tenants(req.headers);
  res.send(result);
});
app.post("/tenants", (req, res) => {
  const incoming = req.body;
  tenants.push(incoming);
  res.json(tenants);
});

const users = require("./users");
//Get user data
app.get("/users", async (req, res) => {
  console.log("Users");
  let result = users(req.headers);
  res.send(result);
});

app.post("/users", (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const id = req.body.id;
  const email = req.body.email;
  const password = req.body.password;

  res.send(JSON.stringify(req.body));
});

// validate the user credentials
app.post("/user/login", (req, res) => {
  const user = req.body.username;
  const pwd = req.body.password;

  const Data = users();

  Data.map((userData) => {
    // return 400 status if username/password is not exist
    if (!user || !pwd) {
      return res.status(400).json({
        error: true,
        message: "Username or Password is required.",
      });
    }
    // return 401 status if the credential is not match.
    if (user !== userData.username || pwd !== userData.password) {
      return res.status(401).json({
        error: true,
        message: "Username or Password is wrong.",
      });
    }
    // generate token
    const token = utils.generateToken(userData);
    // get basic user details
    const userObj = utils.getCleanUser(userData);
    // return the token along with user details
    return res.json({ user: userObj, token });
  });

  // verify the token and return it if it's valid
  app.get("/verifyToken", function (req, res) {
    // check header or url parameters or post parameters for token
    var token = req.query.token;
    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Token is required.",
      });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err)
        return res.status(401).json({
          error: true,
          message: "Invalid token.",
        });

      // return 401 status if the userId does not match.
      if (user.userId !== userData.id) {
        return res.status(401).json({
          error: true,
          message: "Invalid user.",
        });
      }
      // get basic user details
      var userObj = utils.getCleanUser(userData);
      return res.json({ user: userObj, token });
    });
  });

  //middleware that checks if JWT token exists and verifies it if it does exist.
  //In all future routes, this helps to know if the request is authenticated or not.
  app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers["authorization"];
    if (!token) return next(); //if no token, continue

    token = token.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) {
        return res.status(401).json({
          error: true,
          message: "Invalid user.",
        });
      } else {
        req.user = user; //set the user to req so other routes can use it
        next();
      }
    });
  });
});

// request handlers
app.get("/", (req, res) => {
  if (!req.user)
    return res.status(200).json({
      success: true,
      message: "Welcome to Rental House Management Server",
    });
  res.send("Welcome to Rental House Management Server " + req.user.name);
});

app.listen(PORT, () =>
  console.log(`Express server currently running on port ${PORT}`)
);
