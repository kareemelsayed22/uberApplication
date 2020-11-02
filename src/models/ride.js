//jshint esversion:6
class Ride {
   constructor(driverId, fromLattitude, fromLongitude, toLattitude) {
     //this.id = id;
     this.driverId = driverId;
     // this.passengerId = passengerId;
     this.fromLattitude = fromLattitude;
     this.fromLongitude = fromLongitude;
     this.toLattitude = toLattitude;

   }

   // validate() {
   //   if (this.driverId && this.passengerId && this.fromLattitude && this.fromLongitude && this.toLattitude){
   //     return true;
   //   }
   //
   //   return false;
   //  }

   validate() {
     if (this.driverId){
       return true;
     }

     return false;
    }
}
module.exports = Ride
