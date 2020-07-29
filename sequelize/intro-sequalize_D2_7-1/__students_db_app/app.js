const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    return db.Student.create({ fName: "Michael" });
  })
  .then(() => {
    return db.student.findAll();
  })
  .then((allStudents) => {
    console.log(allStudents);
  });

// db.sequelize()
//   .sync()
//   .then(() => {
//     console.log("we are connected");
//     db.student.create({ fname: "Mickey" }).then(() => {
//       db.student.findAll().then((students) => {
//         console.log(students);
//       });
//     });
//   });
