//jshint esversion:6
const Review = require("../models/review.js");


function update(){

}

const index = async (review) => {
    const reviews = await Review.findAll();
    console.log(reviews.every(review => review instanceof Review)); // true
    console.log("All reviews:", JSON.stringify(reviews, null, 2));
    return reviews

}

function show(rideId) {

  const newReview = new Review(rideId);

  return newReview;
}

function update() {

}
function destroy() {

}
const create = (review) => {
    const postReview = Review.create({ rideId: review.rideId, star: review.star });
    return postReview.then((postReview) => {
        console.log('postReview', postReview)
        return postReview
    })

}
// async function create() {
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



// }
async function recreate() {

  const database = await Review.sync({ force: true });
  console.log("The table for the Review model was just (re)created!");
  return database
}

// recreate();

module.exports = {
  index, recreate, create
}
