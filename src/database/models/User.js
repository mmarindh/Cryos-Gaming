module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    
    firts_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    rol_id: DataTypes.INTEGER,

  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};