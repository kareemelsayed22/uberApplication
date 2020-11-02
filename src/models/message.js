//jshint esversion:6
class Message {
   constructor(rideId, body, isPassenger) {
     //this.id = id;
     this.rideId = rideId;
     this.body = body;
     this.isPassenger = isPassenger;
   }
   // validate() {
   //   if (this.rideId && this.body && this.isPassenger){
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
module.exports = Message
