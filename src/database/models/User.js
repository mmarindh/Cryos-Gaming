module.exports = (sequelize, DataTypes) => {
  
  let alias ="User";
  
  let cols ={ 
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    firts_name:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type:DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type:DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    rol: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    biography: DataTypes.STRING
    
  }
  let config = {
    tableName: "users"
  }
  
  let User = sequelize.define(alias, cols, config); 
  
  return User;
}