//jshint esversion:6
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../db.js")

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,

  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name

  // disable the modification of table names; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  // freezeTableName: true
});

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
// w/e you use await use an async function
// async function recreateUserTable(){
//   await User.sync({ force: true });
//   console.log("The table for the User model was just (re)created!");
// }
// recreateUserTable();


// class User {
//    constructor(username, userId, userPassword, isPassenger) {
//      this.userId = userId;
//      this.username = username;
//      this.userPassword = userPassword;
//      this.isPassenger = isPassenger;
//    }
// /*
//    validate() {
//      if (this.userId && this.userName && this.userPassword && this.isPassenger){
//        return true;
//      }
//
//      return false;
//     }
//   */
//
//   validate() {
//     if (this.username){
//       return true;
//     }
//
//     return false;
//    }
//
// }
module.exports = User
