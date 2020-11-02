//jshint esversion:6
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../db.js")

const Message = sequelize.define('Message', {
  // Model attributes are defined here
  rideId: {
    type: DataTypes.STRING,

  },
  body: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  isPassenger: {
    type: DataTypes.STRING,
    //allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Message', // We need to choose the model name

  // disable the modification of table names; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  // freezeTableName: true
});
// class Message {
//    constructor(rideId, body, isPassenger) {
//      //this.id = id;
//      this.rideId = rideId;
//      this.body = body;
//      this.isPassenger = isPassenger;
//    }
//    // validate() {
//    //   if (this.rideId && this.body && this.isPassenger){
//    //     return true;
//    //   }
//    //
//    //   return false;
//    //  }
//
//    validate() {
//      if (this.rideId){
//        return true;
//      }
//
//      return false;
//     }
//
// }
module.exports = Message
