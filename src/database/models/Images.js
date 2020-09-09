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
    const images = sequelize.define(alias, cols);
    images.associate = function(models){
        images.belongsToMany(
            models.products,
            {
                as: 'products',
                through: 'imageproducts',
                foreignKey: 'image_id',
                otherKey: 'product_id'
            }
        )
    };
    return images;
}