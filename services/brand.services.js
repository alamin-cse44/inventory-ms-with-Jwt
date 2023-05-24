const Brand = require("../models/Brand");

exports.createBrandServices = async(data)=> {
    const result = await Brand.create(data);
    
    return result;
}

exports.getBrandServices = async()=> {
    const brands = await Brand.find({}).populate('products');

    return brands;
}

exports.getBrandServicesById = async(id)=> {
    const brands = await Brand.findOne({ _id: id });
    
    return brands;
}

exports.updateBrandServices = async(id, data)=> {
    const result = await Brand.updateOne({ _id: id }, data, {
        runValidators: true
    });
    
    return result;
}