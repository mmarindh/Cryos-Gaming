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
    const imageproducts = sequelize.define(alias, cols);
    imageproducts.associate = function(models) {
        imageproducts.belongsTo(
            models.products,
            {
                as : 'products',
                foreignKey: 'product_id'
            }
        ),
        imageproducts.belongsTo(
            models.images,
            {
                as : 'images',
                foreignKey: 'image_id'
            }
        )
    };
    return imageproducts;
}