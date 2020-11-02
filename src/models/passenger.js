//jshint esversion:6
class Passenger {
   constructor(userId, lattitude, longitude) {
     //this.id = id;
     this.userId = userId;
     this.lattitude = lattitude;
     this.longitude = longitude;
   }

   validate() {
     if (this.userId && this.lattitude && this.longitude){
       return true;
     }

     return false;
    }

}
module.exports = Passenger
