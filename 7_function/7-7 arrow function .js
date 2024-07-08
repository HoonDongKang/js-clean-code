const user = {
  name: "Poco",
  getName: () => {
    return this.name
  },
  getName2: function() {
    return this.name
  }
}

console.log(user.getName()) // undefined
console.log(user.getName2()) // Poco
