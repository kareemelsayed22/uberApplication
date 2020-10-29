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
function create() {
  const newReview = new Review(rideId);

  return newReview;
}

module.exports = {
  index
}
