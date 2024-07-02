const counterApp = combineReducers({
  counter,
  extra
})
 
const firstName = "poco";
const lastName = "jang";

const person = {
  firstName,
  lastName,
  // getFullName: function() {
  //   return this.firstName + " " + this.lastName;
  // }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}