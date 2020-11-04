//jshint esversion:6
const Ride = require("../models/ride.js");


function update(){

}

const index = async (ride) => {
    const rides = await Ride.findAll();
    console.log(rides.every(ride => ride instanceof Ride)); // true
    console.log("All rides:", JSON.stringify(rides, null, 2));
    return rides

}

function show(driverId) {

  const newRide = new Ride(driverId);

  return newRide;
}

function update() {

}
function destroy() {

}
const create = (ride) => {
    const postRide = Ride.create({ driverId: ride.driverId, passengerId: ride.passengerId });
    return postRide.then((postRide) => {
        console.log('postRide', postRide)
        return postRide
    })

}
// async function create() {
  // async function recreateRideTable(){
  //   const database = await Ride.sync({ force: true });
  //   console.log("The table for the Ride model was just (re)created!");
  //   return database
  // }
  // recreateRideTable().then(() => {
  //     const kar123 = Ride.create({ driverId: "Kar123", passengerId: "1234" });
  //     console.log('Kar123 was saved to the database!');
  // })


  // const kar123 = Ride.create({ driverId: "Kar123", passengerId: "1234" });
  // console.log('Kar123 was saved to the database!');
// }
async function recreate() {

  const database = await Ride.sync({ force: true });
  console.log("The table for the Ride model was just (re)created!");
  return database
}

// recreate();

module.exports = {
  index, create, recreate
}
