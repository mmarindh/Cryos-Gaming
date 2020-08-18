module.exports = (sequelize, dataTypes) => {
    let alias = 'processorBrands';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        token: dataTypes.STRING,
        user_id: dataTypes.INTEGER,
    
        
        
    };
    const ProcessorBrand = sequelize.define(alias, cols);

    return ProcessorBrand;
}