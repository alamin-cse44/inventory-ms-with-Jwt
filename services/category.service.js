const Category = require("../models/Category");

exports.createCategoryServices = async (data) => {
  const categories = await Category.create(data);

  return categories;
};

exports.getCategoryServices = async (data) => {
  const categories = await Category.find({});

  return categories;
};

exports.getCategoryServicesById = async (id) => {
  const categories = await Category.findOne({ _id: id });

  return categories;
};

exports.updateCategoryServices = async (id, data) => {
  const categories = await Category.updateOne({ _id: id }, data, {
    runValidators: true
  });

  return categories;
};
