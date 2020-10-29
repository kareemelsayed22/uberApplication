//jshint esversion:6
const Passenger = require("../models/passenger.js");


function update(){

}

function index(){
  const userIds = ["id1", "id2", "id3", "id4", "id5", "id6", "id7", "id8", "id9", "id10"];

 const newPassengers = [];
  for (let i = 0; i < 10; i++) {
    const newPassenger = new Passenger(userIds[i]);
    newPassengers.push(newPassenger);
  }

  return newPassengers;
}

function show(userId) {

  const newPassenger = new Passenger(userId);

  return newPassenger;
}

function update() {

}
function destroy() {

}
function create() {
  const newPassenger = new Passenger(userId);

  return newPassenger;
}

module.exports = {
  index
}
