const functions = require("firebase-functions");
const express = require("express");

const app = express();
const API = require("./lib/API");

app.get("/", (req, res) => {
  API.orders()
    .then((response) => {
      console.log(response.data.length);
      res.json(response.data);
    })
    .catch((err) => {
      res.json(err);
    });
});

exports.WooAccess = functions.region("europe-west1").https.onRequest(app);
