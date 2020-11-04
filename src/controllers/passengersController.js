//jshint esversion:6
const Passenger = require("../models/passenger.js");


function update(){

}

const index = async (passenger) => {
    const passengers = await Passenger.findAll();
    console.log(passengers.every(passenger => passenger instanceof Passenger)); // true
    console.log("All passengers:", JSON.stringify(passengers, null, 2));
    return passengers

}

function show(userId) {

  const newPassenger = new Passenger(userId);

  return newPassenger;
}

function update() {

}
function destroy() {

}
const create = (passenger) => {
    const postPassenger = Passenger.create({ userId: passenger.userId, lattitude: passenger.lattitude });
    return postPassenger.then((postPassenger) => {
        console.log('postPassenger', postPassenger)
        return postPassenger
    })

}
// async function create() {
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



// }
async function recreate() {

  const database = await Passenger.sync({ force: true });
  console.log("The table for the Passenger model was just (re)created!");
  return database
}

// recreate();

module.exports = {
  index, recreate, create
}
