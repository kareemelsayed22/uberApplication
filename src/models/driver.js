//jshint esversion:6
class Driver {
   constructor(userId, lattitude, longitude) {
//     this.id = id;
     this.userId = userId;
     this.lattitude = lattitude;
     this.longitude = longitude;
   }
// validate() {
//   if (this.userId && this.lattitude && this.longitude){
//     return true;
//   }
//
//   return false;
//  }

validate() {
  if (this.userId){
    return true;
  }

  return false;
 }

}

module.exports = Driver
