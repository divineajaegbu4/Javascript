/*
* In Object we have properties and methods
* Another name for properties are (state, data, fields and attributes)
* Another name for methods are (functions, and actions)
* Properties in the objects are the equipment you used in the object
* Methods in the objects are were you want to use the equipment to perform an action.
* */

const  restaurant = {
  name: "hotel",
  guestCount: 75,
  guestCapacity: 0,
  checkAvailability: function(partySize) {
    let status = this.guestCount - this.guestCapacity
    return partySize <= status;
  },

//   Challenge Area

  seatParty: function(partySize) {
     this.guestCapacity = this.guestCapacity + partySize
  },

  removeParty: function(partySize) {
   this.guestCapacity = this.guestCapacity - partySize;
  }
}


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

