const serverless = require("serverless-http");
const users = require("./services/users/index");
module.exports.users = serverless(users);
