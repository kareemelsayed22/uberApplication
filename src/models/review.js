//jshint esversion:6
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../db.js")

const Review = sequelize.define('Review', {
  // Model attributes are defined here
  rideId: {
    type: DataTypes.STRING,

  },
  star: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  forPassenger: {
    type: DataTypes.STRING,
    //allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    //allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Review', // We need to choose the model name

  // disable the modification of table names; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  // freezeTableName: true
});
// class Review {
//    constructor(rideId, star, comment) {
//      //this.id = id;
//      this.star = star;
//      this.rideId = rideId;
//      //this.isPassenger = isPassenger;
//      this.comment = comment;
//    }
//
//    // validate() {
//    //   if (this.star && this.rideId && this.isPassenger && this.comment){
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
module.exports = Review
