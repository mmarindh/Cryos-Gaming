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
        
    
    const Product = sequelize.define(alias, cols)
    //Aquí creo mi relación entre productos y Categorias (Categories)
    //Product.associate = function(models) {
       // Product.belongsTo(
        //    models.Category,
        //    {
        //        as : 'category',
        //        foreignKey: 'category_Id'
        //    }
       // )
   // };

    return Product
}