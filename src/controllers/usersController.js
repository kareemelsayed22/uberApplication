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
async function create() {
  // async function recreateUserTable(){
  //   const database = await User.sync({ force: true });
  //   console.log("The table for the User model was just (re)created!");
  //   return database
  // }
  // recreateUserTable().then(() => {
  //     const kareem = User.create({ username: "Kareem", password: "abcd" });
  //     console.log('Kareem was saved to the database!');
  // })
  const kareem = User.create({ username: "Kareem", password: "abcd" });
  console.log('Kareem was saved to the database!');




}

create();
module.exports = {
  index
}
