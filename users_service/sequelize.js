const Sequelize = require('sequelize');
const UserModel = require('./models/user')

const sequelize = new Sequelize("msadev", "admin", "sj4i2?GKp>3nhZKr&^yRsu]Xe5Z-!Z", {
  host: 'rdu33xin9ondb9.cpcnzsij5ofj.us-east-1.rds.amazonaws.com',
  port: 3306,
  dialect: 'mysql',  
  dialectOptions: {
      ssl: 'Amazon RDS'
  }
});

const User = UserModel(sequelize, Sequelize);
sequelize.sync({ force: true })
  .then(() => {    
})

module.exports = {
    User
}

