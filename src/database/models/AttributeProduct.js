module.exports = (sequelize, dataTypes) => {
    let alias = 'attributeProduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: dataTypes.INTEGER,
        attribute_id: dataTypes.INTEGER,
    
        
        
    };
    const AttributeProducts = sequelize.define(alias, cols);

    return AttributeProducts;
}