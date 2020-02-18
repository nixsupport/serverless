console.log(require("./AddUserController"), "cont");
module.exports = {
  addUser: require("./AddUserController"),
  editUser: require("./EditUserController"),
  deleteUser: require("./DeleteUserController")
};
