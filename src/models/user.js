//jshint esversion:6
class User {
   constructor(username, userId, userPassword, isPassenger) {
     this.userId = userId;
     this.username = username;
     this.userPassword = userPassword;
     this.isPassenger = isPassenger;
   }
/*
   validate() {
     if (this.userId && this.userName && this.userPassword && this.isPassenger){
       return true;
     }

     return false;
    }
  */

  validate() {
    if (this.username){
      return true;
    }

    return false;
   }

}
module.exports = User
