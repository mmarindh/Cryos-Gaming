module.exports = (sequelize, dataTypes) => {
    let alias = 'addressUser';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: dataTypes.INTEGER,
        address_id: dataTypes.INTEGER,
    
        
        
    };
    let config = {
        timestamps: false,
    }
    const AddressUser = sequelize.define(alias, cols, config);

    return AddressUser;
}