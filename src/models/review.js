//jshint esversion:6
class Review {
   constructor(rideId, star, comment) {
     //this.id = id;
     this.star = star;
     this.rideId = rideId;
     //this.isPassenger = isPassenger;
     this.comment = comment;
   }

   // validate() {
   //   if (this.star && this.rideId && this.isPassenger && this.comment){
   //     return true;
   //   }
   //
   //   return false;
   //  }

   validate() {
     if (this.rideId){
       return true;
     }

     return false;
    }

}
module.exports = Review
