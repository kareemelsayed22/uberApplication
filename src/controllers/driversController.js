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
function create() {
  const newDriver = new Driver(userId);

  return newDriver;
}

module.exports = {
  index
}
