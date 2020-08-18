module.exports = (sequelize, dataTypes) => {
    let alias = 'attributes';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
        description: dataTypes.STRING,
    
        
        
    };
    const Attribute = sequelize.define(alias, cols);

    return Attribute;
}