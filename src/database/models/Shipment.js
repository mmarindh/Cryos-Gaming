module.exports = (sequelize, dataTypes) => {
    let alias = 'shipment';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        address_id: dataTypes.STRING,
    
        
        
    };
    const Shipment = sequelize.define(alias, cols);

    return Shipment;
}