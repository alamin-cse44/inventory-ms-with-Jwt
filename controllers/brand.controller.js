const { createBrandServices, getBrandServices, getBrandServicesById, updateBrandServices } = require("../services/brand.services")

exports.createBrand = async(req, res, next) => {
    try {
        const result = await createBrandServices(req.body);

        res.status(200).json({
            status: 'success',
            message: 'Successfully created the brand'
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: "Couldn't create the brand"
        })
    }
}

exports.getBrand = async(req, res, next) => {
    try {
        const brands = await getBrandServices(req.body);

        res.status(200).json({
            status: 'success',
            message: 'Successfully find the brands',
            data: brands
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: "Couldn't get the brands"
        })
    }
}

exports.getBrandById = async(req, res, next) => {
    const { id } = req.params;
    try {
        const brand = await getBrandServicesById(id);

        if(!brand){
            return res.status(400).json({
                status: "fail",
                error: "Couldn't find brand with this id"
            })
        }

        res.status(200).json({
            status: 'success',
            message: 'Successfully find the brand',
            data: brand
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: "Couldn't get the brand"
        })
    }
}

exports.updateBrand = async(req, res, next) => {
    const { id } = req.params;
    try {
        const result = await updateBrandServices(id, req.body);
        console.log(result);
        if(!result.modifiedCount){
            return res.status(400).json({
                status: "fail",
                error: "Couldn't update the brand with this id"
            })
        }

        res.status(200).json({
            status: 'success',
            message: 'Successfully updated the brand',
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: "Couldn't updated the brand"
        })
    }
}