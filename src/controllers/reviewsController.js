//jshint esversion:6
const Review = require("../models/review.js");


function update(){

}

function index(){
  const rideIds = [81, 82, 83, 84, 85, 86, 87, 88, 89, 94];

 const newReviews = [];
  for (let i = 0; i < 10; i++) {
    const newReview = new Review(rideIds[i]);
    newReviews.push(newReview);
  }

  return newReviews;
}

function show(rideId) {

  const newReview = new Review(rideId);

  return newReview;
}

function update() {

}
function destroy() {

}
async function create() {
  // async function recreateReviewTable(){
  //   const database = await Review.sync({ force: true });
  //   console.log("The table for the Review model was just (re)created!");
  //   return database
  // }
  // recreateReviewTable().then(() => {
  //   const firstReview = Review.create({ rideId: "asdf1", comment: "very good" });
  //   console.log('asdf1 was saved to the database!');
  // })


  // const firstReview = Review.create({ rideId: "asdf1", comment: "very good" });
  // console.log('asdf1 was saved to the database!');



}
async function recreate() {

  const database = await Review.sync({ force: true });
  console.log("The table for the User model was just (re)created!");
  return database
}

// recreate();

module.exports = {
  index, recreate
}
