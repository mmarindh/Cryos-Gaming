module.exports = (sequelize, dataTypes) => {
    let alias = 'images';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        filename: dataTypes.STRING,
    
        
        
    };
    const image = sequelize.define(alias, cols);

    return image;
}