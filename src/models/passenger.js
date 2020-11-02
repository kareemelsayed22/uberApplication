//jshint esversion:6
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../db.js")

const Passenger = sequelize.define('Passenger', {
  // Model attributes are defined here
  userId: {
    type: DataTypes.STRING,

  },
  lattitude: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  longitude: {
    type: DataTypes.STRING,
    //allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Passenger', // We need to choose the model name

  // disable the modification of table names; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  // freezeTableName: true
});
// class Passenger {
//    constructor(userId, lattitude, longitude) {
//      //this.id = id;
//      this.userId = userId;
//      this.lattitude = lattitude;
//      this.longitude = longitude;
//    }
//
//    validate() {
//      if (this.userId && this.lattitude && this.longitude){
//        return true;
//      }
//
//      return false;
//     }
//
// }
module.exports = Passenger
