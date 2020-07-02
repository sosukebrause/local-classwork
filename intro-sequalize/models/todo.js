module.exports = (sequelize, DataTypes) => {
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

  return Todo;
};
