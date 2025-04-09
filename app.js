const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const cors = require("cors");
require("dotenv").config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

console.log("MONGODB_URI_PROD", MONGODB_URI_PROD);

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

app.listen(5000, () => {
  console.log("server on 5000");
});
