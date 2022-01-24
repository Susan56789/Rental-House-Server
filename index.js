const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;

app.use(express.json());

const cors = require("cors");
//import cors from 'cors';

var corsOptions = {
  origin: [
    "http://localhost:4200",
    "http://localhost:4000",
    "http://localhost:3000",
    "**",
  ],
  credentials: "include",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello");
});

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
app.get("/users", async (req, res) => {
  console.log("Users");
  let result = await users(req.headers);
  res.send(result);
});
app.post("/users", (req, res) => {
  const incoming = req.body;
  users.push(incoming);
  res.json(users);
});

app.listen(PORT, () =>
  console.log(`Express server currently running on port ${PORT}`)
);
