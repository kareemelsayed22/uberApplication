//jshint esversion:6
const Message = require("../models/message.js");


function update(){

}

function index(){
  const rideIds = [11, 22, 33, 44, 55, 66, 77, 88, 99, 14];

 const newMessages = [];
  for (let i = 0; i < 10; i++) {
    const newMessage = new Message(rideIds[i]);
    newMessages.push(newMessage);
  }

  return newMessages;
}

function show(rideId) {

  const newMessage = new Message(rideId);

  return newMessage;
}

function update() {

}
function destroy() {

}
function create() {
  const newMessage = new Message(rideId);

  return newMessage;
}

module.exports = {
  index
}
