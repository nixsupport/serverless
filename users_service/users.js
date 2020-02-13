const ApiBuilder = require("claudia-api-builder");
AWS = require("aws-sdk");
const { User } = require("./sequelize");

var api = new ApiBuilder();
api.registerAuthorizer("Authorizer", {
  providerARNs: [
    "arn:aws:cognito-idp:us-east-1:748496058110:userpool/us-east-1_gnXTF7OuR"
  ]
});
api.get(
  "/icecreams",
  function(request) {
    // GET all users
    return request;
  },
  { cognitoAuthorizer: "Authorizer" }
);

// create a user
api.post('/users', (req) => {  
  return User.create(req.body);
})
// get all users
api.get('/users', (req) => {
  return User.findAll();
})

module.exports = api;
