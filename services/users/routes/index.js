const { addUser } = require("../controllers/index");
console.log(addUser, "add User");
module.exports = app => {
  app.get("/users/", addUser);
};
