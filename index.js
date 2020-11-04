//jshint eversion:6
// "use strict";
const Hapi = require("@hapi/hapi");
const usersController = require("./src/controllers/usersController.js")
const driversController = require("./src/controllers/driversController.js")
const messagesController = require("./src/controllers/messagesController.js")
const ridesController = require("./src/controllers/ridesController.js")
const reviewsController = require("./src/controllers/reviewsController.js")
const passengersController = require("./src/controllers/passengersController.js")


/**
const Driver = require("./src/models/drivers.js");
const Passenger = require("./src/models/passengers.js");
const Review = require("./src/models/reviews.js");
const Ride = require("./src/models/rides.js");
const User = require("./src/models/user.js");
const Message = require("./src/models/messages.js");
**/



//creates a new User

// connected to local host. Done!

const init = async () => {
  const server = new Hapi.Server({ port: 3000,  host: 'localhost'});
// Performs the index function from Controller on a User model
  // usersController.syncAll(sequelize)
  server.route({
    method: 'GET',
    path: '/users',
    handler: (request, h) => {
        const users = usersController.index();

        return users;
    }
});

server.route({
  method: 'POST',
  path: '/users',
  handler: (request, h) => {
     // console.log("payload", JSON.parse(request.payload));
     // console.log("payload", JSON.parse(request.payload));

      const payload = JSON.parse(request.payload);
      const user = payload.user;

      return usersController.create(user);
  }
});

server.route({
  method: 'GET',
  path: '/rides',
  handler: (request, h) => {
      const rides = ridesController.index();

      return users;
  }
});

server.route({
  method: 'POST',
  path: '/rides',
  handler: (request, h) => {
     // console.log("payload", JSON.parse(request.payload));
     // console.log("payload", JSON.parse(request.payload));

      const payload = JSON.parse(request.payload);
      const ride = payload.ride;

      return ridesController.create(ride);
  }
});

server.route({
  method: 'GET',
  path: '/reviews',
  handler: (request, h) => {
      const reviews = reviewsController.index();

      return reviews;
  }
});

server.route({
  method: 'POST',
  path: '/reviews',
  handler: (request, h) => {
     // console.log("payload", JSON.parse(request.payload));
     // console.log("payload", JSON.parse(request.payload));

      const payload = JSON.parse(request.payload);
      const review = payload.review;

      return reviewsController.create(review);
  }
});
server.route({
  method: 'GET',
  path: '/passengers',
  handler: (request, h) => {
      const passengers = passengersController.index();

      return passengers;
  }
});

server.route({
  method: 'POST',
  path: '/passengers',
  handler: (request, h) => {
     // console.log("payload", JSON.parse(request.payload));
     // console.log("payload", JSON.parse(request.payload));

      const payload = JSON.parse(request.payload);
      const passenger = payload.passenger;

      return passengersController.create(passenger);
  }
});


server.route({
  method: 'GET',
  path: '/messages',
  handler: (request, h) => {
      const messages = messagesController.index();

      return messages;
  }
});

server.route({
  method: 'POST',
  path: '/messages',
  handler: (request, h) => {
     // console.log("payload", JSON.parse(request.payload));
     // console.log("payload", JSON.parse(request.payload));

      const payload = JSON.parse(request.payload);
      const message = payload.message;

      return messagesController.create(message);
  }
});


server.route({
  method: 'GET',
  path: '/drivers',
  handler: (request, h) => {
      const drivers = driversController.index();

      return drivers;
  }
});

server.route({
  method: 'POST',
  path: '/drivers',
  handler: (request, h) => {
     // console.log("payload", JSON.parse(request.payload));
     // console.log("payload", JSON.parse(request.payload));

      const payload = JSON.parse(request.payload);
      const driver = payload.driver;

      return driversController.create(driver);
  }
});



  //server.route();

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
