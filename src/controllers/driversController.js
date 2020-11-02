//jshint esversion:6
const Driver = require("../models/driver.js");


function update(){

}

function index(){
  const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const newDrivers = [];
  for (let i = 0; i < 10; i++) {
    const newDriver = new Driver(userIds[i]);
    newDrivers.push(newDriver);
  }

  return newDrivers;
}

function show(userId) {

  const newDriver = new Driver(userId);

  return newDriver;
}

function update() {

}
function destroy() {

}
async function create() {
  async function recreateDriverTable(){
    const database = await Driver.sync({ force: true });
    console.log("The table for the Driver model was just (re)created!");
    return database
  }
  recreateDriverTable().then(() => {
    const firstDriver = Driver.create({ userId: "ert23", lattitude: "6758" });
    console.log('ert23 was saved to the database!');
  })


  // const firstPassenger = Passenger.create({ userId: "asd67", lattitude: "675" });
  // console.log('asd67 was saved to the database!');



}

create();

module.exports = {
  index
}
