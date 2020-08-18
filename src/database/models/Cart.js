module.exports = (sequelize, dataTypes) => {
    let alias = 'cart';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: dataTypes.INTEGER,
        user_id: dataTypes.INTEGER,
    
        
        
    };
    const Cart = sequelize.define(alias, cols);

    return Cart;
}