module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
        price: dataTypes.INTEGER,
        description: dataTypes.STRING,
        image: dataTypes.STRING,
        stock: dataTypes.INTEGER,
        brand_id: dataTypes.INTEGER,
        category_Id: dataTypes.INTEGER,
        
        
    };
    /*let config = {
        tableName: 'Papachos',
        timestamps: false
    };*/
        
    
    const products = sequelize.define(alias, cols)
    
    //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
    products.associate = function(models) {
        products.belongsTo(
            models.processorBrands,
            {
                as : 'processorbrands',
                foreignKey: 'processorbrand_id'
            }
        )
        products.belongsToMany(
            models.images,
            {
                as: 'images',
                through: 'imageproducts',
                foreignKey: 'product_id',
                otherKey: 'image_id'
            }
        )
        
    };
    return products;
}