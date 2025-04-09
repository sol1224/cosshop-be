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
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("connection fail", err.message);
  });

// Use Heroku's provided port, or fallback to 5000 for local development
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
