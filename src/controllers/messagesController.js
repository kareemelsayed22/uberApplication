//jshint esversion:6
const Message = require("../models/message.js");


function update(){

}

const index = async (message) => {
    const messages = await Message.findAll();
    console.log(messages.every(message => message instanceof Message)); // true
    console.log("All messages:", JSON.stringify(messages, null, 2));
    return messages

}

function show(rideId) {

  const newMessage = new Message(rideId);

  return newMessage;
}

function update() {

}
function destroy() {

}
const create = (message) => {
    const postMessage = Message.create({ rideId: message.rideId, body: message.body });
    return postMessage.then((postMessage) => {
        console.log('postMessage', postMessage)
        return postMessage
    })

}
// async function create() {
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



// }
async function recreate() {

  const database = await Message.sync({ force: true });
  console.log("The table for the Message model was just (re)created!");
  return database
}

// recreate();

module.exports = {
  index, recreate, create
}
