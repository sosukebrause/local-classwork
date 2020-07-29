module.exports = (sequelize, DataTypes) => {
  //here we are creating an item model that will become a table, for the items pluralized: Todo's

  //In the Todo object below we are attaching the function within the first argument, 'sequelize'

  //first object we are defining is the 'name' of the MODEL we are creating a table for, the second oject is where we define the data type.

  const Todo = sequelize.define("Todo", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  //freezeTableData: true

  return Todo;
};
//

//this is where we're creating a model for the object. It will be for one Todo and the table will be called Todos

//freezeTableData will prevent the table name
