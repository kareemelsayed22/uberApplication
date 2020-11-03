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
async function create() {
  // async function recreatePassengerTable(){
  //   const database = await Passenger.sync({ force: true });
  //   console.log("The table for the Passenger model was just (re)created!");
  //   return database
  // }
  // recreatePassengerTable().then(() => {
  //   const firstPassenger = Passenger.create({ userId: "asd67", lattitude: "675" });
  //   console.log('asd67 was saved to the database!');
  // })


  // const firstPassenger = Passenger.create({ userId: "asd67", lattitude: "675" });
  // console.log('asd67 was saved to the database!');



}
async function recreate() {

  const database = await Passenger.sync({ force: true });
  console.log("The table for the User model was just (re)created!");
  return database
}

// recreate();

module.exports = {
  index, recreate
}
