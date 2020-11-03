//jshint esversion:6
const User = require("../models/user.js");


function update(){

}

const index = async (user) => {
    const users = await User.findAll();
    console.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));
    return users

}

function show(username) {

  const newUser = new User(username);

  return newUser;
}

function update() {

}
function destroy() {

}
const create = (user) => {
    const postUser = User.create({ password: user.password, username: user.username });
    return postUser.then((postUser) => {
        console.log('postUser', postUser)
        return postUser
    })

}
async function recreate() {

  const database = await User.sync({ force: true });
  console.log("The table for the User model was just (re)created!");
  return database
}
// function syncAll(sequelize) {
//   sequelize.sync({ force: true, match: /_test$/ });
// }

// recreate()


module.exports = {
  index, create, recreate
}
