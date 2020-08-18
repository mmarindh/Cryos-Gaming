module.exports = (sequelize, dataTypes) => {
    let alias = 'cartProduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: dataTypes.INTEGER,
        product_sale: dataTypes.INTEGER,
        quantity: dataTypes.INTEGER,
        subtotal: dataTypes.INTEGER,
        state_id: dataTypes.INTEGER,
        cart_id: dataTypes.INTEGER,
    
        
        
    };
    const CartProduct = sequelize.define(alias, cols);

    return CartProduct;
}