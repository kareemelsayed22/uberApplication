//jshint esversion:6
const Ride = require("../models/ride.js");


function update(){

}

function index(){
  const driverIds = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

 const newRides = [];
  for (let i = 0; i < 10; i++) {
    const newRide = new Ride(driverIds[i]);
    newRides.push(newRide);
  }

  return newRides;
}

function show(driverId) {

  const newRide = new Ride(driverId);

  return newRide;
}

function update() {

}
function destroy() {

}
async function create() {
  // async function recreateRideTable(){
  //   const database = await Ride.sync({ force: true });
  //   console.log("The table for the Ride model was just (re)created!");
  //   return database
  // }
  // recreateRideTable().then(() => {
  //     const kar123 = Ride.create({ driverId: "Kar123", passengerId: "1234" });
  //     console.log('Kar123 was saved to the database!');
  // })


  const kar123 = Ride.create({ driverId: "Kar123", passengerId: "1234" });
  console.log('Kar123 was saved to the database!');



}

create();

module.exports = {
  index
}
