const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());

app.use("/", (req, res) => {
  res.send("Hello From Server");
});

module.exports = app;
