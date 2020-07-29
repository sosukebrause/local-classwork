module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    student: {
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

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Task;
};
