class Property {
  constructor(address) {
    this.address = address;
    this.people = [];
    this.rooms = [];
    this.rentCost = [];
  }
  addToRooms(arr) {
    this.rooms = [...this.rooms, ...arr];
  }
  addToPeople(arr) {
    this.people = [...this.people, ...arr];
  }
}
const myPlace = new Property("114 Lyon st, SF");
console.log(myPlace);

module.exports = Property;
