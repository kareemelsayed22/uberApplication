//jshint esversion:6
const User = require("../models/user.js");


function update(){

}

function index(){
  const usernames = ["Chris", "Cris", "Kareem", "Bob", "Mary", "John", "James", "Tom", "Mike", "Joe"];

 const newUsers = [];
  for (let i = 0; i < 10; i++) {
    const newUser = new User(usernames[i]);
    newUsers.push(newUser);
  }

  return newUsers;
}

function show(username) {

  const newUser = new User(username);

  return newUser;
}

function update() {

}
function destroy() {

}
function create() {
  const newUser = new User(username);

  return newUser;
}

module.exports = {
  index
}
