module.exports = (sequelize, dataTypes) => {
    let alias = 'paymenMethod';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        method: dataTypes.STRING,
    
        
        
    };
    const PaymentMethod = sequelize.define(alias, cols);

    return PaymentMethod;
}