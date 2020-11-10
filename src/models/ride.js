//jshint esversion:6
//
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../db.js")

const Ride = sequelize.define('Ride', {
  // Model attributes are defined here
  driverId: {
    type: DataTypes.STRING,
    //allowNull: false
  },
  passengerId: {
    type: DataTypes.STRING,
    // allowNull defaults to true
    //allowNull: false
  },
  fromLattitude: {
    type: DataTypes.STRING,

  },
  fromLongitude: {
    type: DataTypes.STRING,

  },
  toLattitude: {
    type: DataTypes.STRING,

  },
  toLongitude: {
    type: DataTypes.STRING,

  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Ride', // We need to choose the model name

  // disable the modification of table names; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  // freezeTableName: true
});




// class Ride {
//    constructor(driverId, fromLattitude, fromLongitude, toLattitude) {
//      //this.id = id;
//      this.driverId = driverId;
//      // this.passengerId = passengerId;
//      this.fromLattitude = fromLattitude;
//      this.fromLongitude = fromLongitude;
//      this.toLattitude = toLattitude;
//
//    }
//
//    // validate() {
//    //   if (this.driverId && this.passengerId && this.fromLattitude && this.fromLongitude && this.toLattitude){
//    //     return true;
//    //   }
//    //
//    //   return false;
//    //  }
//
//    validate() {
//      if (this.driverId){
//        return true;
//      }
//
//      return false;
//     }
// }
module.exports = Ride
