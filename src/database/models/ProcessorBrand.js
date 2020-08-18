module.exports = (sequelize, dataTypes) => {
    let alias = 'processorBrands';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
    
        
        
    };
    const ProcessorBrand = sequelize.define(alias, cols);

    return ProcessorBrand;
}