//jshint esversion:6
const Driver = require("../models/driver.js");


function update(){

}

const index = async (driver) => {
    const drivers = await Driver.findAll();
    console.log(drivers.every(driver => driver instanceof Driver)); // true
    console.log("All drivers:", JSON.stringify(drivers, null, 2));
    return drivers

}

function show(userId) {

  const newDriver = new Driver(userId);

  return newDriver;
}

function update() {

}
function destroy() {

}
const create = (driver) => {
    const postDriver = Driver.create({ userId: driver.userId, lattitude: driver.lattitude });
    return postDriver.then((postDriver) => {
        console.log('postDriver', postDriver)
        return postDriver
    })

}

async function recreate() {

  const database = await Driver.sync({ force: true });
  console.log("The table for the Driver model was just (re)created!");
  return database
}

// recreate();

module.exports = {
  index, recreate, create
}
