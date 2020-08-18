module.exports = (sequelize, dataTypes) => {
    let alias = 'rol';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: dataTypes.STRING,
    
        
        
    };
    const Rols = sequelize.define(alias, cols);

    return Rols;
}