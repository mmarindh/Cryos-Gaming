module.exports = (sequelize, dataTypes) => {
    let alias = 'order';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id: dataTypes.INTEGER,
        payment_id: dataTypes.INTEGER,
        shipment_id: dataTypes.INTEGER,
    
        
        
    };
    const Order = sequelize.define(alias, cols);

    return Order;
}