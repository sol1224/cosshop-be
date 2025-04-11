require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("", indexRouter);

// mongoose connect
const mongoURI = MONGODB_URI_PROD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("connection fail", err);
  });

app.listen(port, () => {
  console.log("success! port");
});
