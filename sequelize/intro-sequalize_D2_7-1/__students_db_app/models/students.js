module.exports = (sequelize, Datatypes) => {
  const student = sequelize.define("student", {
    fName: Datatypes.STRING,
  });
  return student;
};
