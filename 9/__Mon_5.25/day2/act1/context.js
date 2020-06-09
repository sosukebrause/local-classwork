var person = {
  name: "mario",
  sayThing: function () {
    console.log("it's a me ");

    setTimeout(function () {
      console.log(this.name);
    }, 2000);
  },
};
person.sayThing();
//DOESNT WORK BECAUSE THE "THIS" IS TALKING TO THE OBJECT, SETTIMEOUT

var person = {
  name: "mario",
  sayThing: function () {
    console.log("it's a me ");

    setTimeout(() => {
      console.log(this.name);
    }, 3000);
  },
};
person.sayThing();
//THIS WORKS CAUSE REPLACED FUNCTION W ARROWS ON SETTIMEOUT. IT NOW TALKS TO THE PREVIOUS OBJECT

var person = {
  name: "mario",
  sayThing: function () {
    console.log("it's a me ");

    setTimeout(() => {
      console.log(this.name);
    }, 3000);
  },
};
person.sayThing();
