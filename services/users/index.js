const serverless = require("serverless-http");
const express = require("express");
const app = express();
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");
var cognitoidentity = new AWS.CognitoIdentity();
const routes = require("./routes/index");

app.use(bodyParser.json({ strict: false }));

routes(app);
module.exports = app;
