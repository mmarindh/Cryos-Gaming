module.exports = (sequelize, dataTypes) => {
    let alias = 'state';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        state: dataTypes.STRING,
    
        
        
    };
    const States = sequelize.define(alias, cols);

    return States;
}