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
//   server.route({
//     method: 'GET',
//     path: '/users',
//     handler: (request, h) => {
//         const users = usersController.index();
//
//         return users;
//     }
// });

// Performs the index function from Controller on a Driver model
//   server.route({
//     method: 'GET',
//     path: '/drivers',
//     handler: (request, h) => {
//         const drivers = driversController.index();
//
//         return drivers;
//     }
// });
//
// // Performs the index function from Controller on a Message model
// server.route({
//   method: 'GET',
//   path: '/messages',
//   handler: (request, h) => {
//       const messages = messagesController.index();
//
//       return messages;
//   }
// });


// Performs the index function from Controller on a Ride model
// server.route({
//   method: 'GET',
//   path: '/rides',
//   handler: (request, h) => {
//       const rides = ridesController.index();
//
//       return rides;
//   }
// });


// Performs the index function from Controller on a Review model
// server.route({
//   method: 'GET',
//   path: '/reviews',
//   handler: (request, h) => {
//       const reviews = reviewsController.index();
//
//       return reviews;
//   }
// });

// Performs the index function from Controller on a Review model
server.route({
  method: 'GET',
  path: '/passengers',
  handler: (request, h) => {
      const passengers = passengersController.index();

      return passengers;
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
