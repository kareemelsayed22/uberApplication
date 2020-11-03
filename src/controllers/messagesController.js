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
async function create() {
  // async function recreateMessageTable(){
  //   const database = await Message.sync({ force: true });
  //   console.log("The table for the Message model was just (re)created!");
  //   return database
  // }
  // recreateMessageTable().then(() => {
  //   const firstMessage = Message.create({ rideId: "qwer1", body: "body stuff" });
  //   console.log('qwer1 was saved to the database!');
  // })


  // const firstMessage = Message.create({ rideId: "qwer1", body: "body stuff" });
  // console.log('qwer1 was saved to the database!');



}
async function recreate() {

  const database = await Message.sync({ force: true });
  console.log("The table for the User model was just (re)created!");
  return database
}

// recreate();

module.exports = {
  index, recreate
}
