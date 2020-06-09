const House = require("./util/House");
const myHouse = new House("114 Lyon st, SF", true, true);
myHouse.addToPeople(["adam", "sten"]);
myHouse.addToRooms(["sunroom", "greenhouse"]);

console.log(myHouse);
