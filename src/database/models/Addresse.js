module.exports = (sequelize, dataTypes) => {
    let alias = 'addresse';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: dataTypes.STRING,
        number: dataTypes.INTEGER,
        
        
    };
    let config = {
        tablename: "adresses",
        timestamps: false
    };
    const Adresses = sequelize.define(alias, cols, config);

    return Adresses;
}