const {
  createCategoryServices,
  getCategoryServices,
  getCategoryServicesById,
  updateCategoryServices,
} = require("../services/category.service");

exports.createCategory = async (req, res, next) => {
  try {
    const categories = await createCategoryServices(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully inserted the category",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "fails",
      error: "The category is not inserted",
    });
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const categories = await getCategoryServices(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully found the category",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "fails",
      error: "The category is not found",
    });
  }
};

exports.getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const categories = await getCategoryServicesById(id);

    res.status(200).json({
      status: "success",
      message: "Successfully found the category by it's id",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "fails",
      error: "The category is not found",
    });
  }
};

exports.updateCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const categories = await updateCategoryServices(id, req.body);
    console.log(categories);
    if (!categories.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        error: "The category doesn't exist",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully upadted the category",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "fails",
      error: "The category can't be updated",
    });
  }
};
