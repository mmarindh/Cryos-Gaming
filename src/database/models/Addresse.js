module.exports = (sequelize, DataTypes) => {
    let alias = 'Addresse';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
        
        
    };
   /* let config = {
       tablename: "adresses",
      timestamps: false
    };*/ 
    
    const Adresses = sequelize.define(alias, cols);

    return Adresses;
}