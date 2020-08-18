module.exports = (sequelize, dataTypes) => {
    let alias = 'imageProduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: dataTypes.INTEGER,
        image_id: dataTypes.INTEGER,
    
    
        
        
    };
    const ImageProducts = sequelize.define(alias, cols);

    return ImageProducts;
}