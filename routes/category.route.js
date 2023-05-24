const express = require('express');
const router = express.Router();
const categoryControllers = require('../controllers/category.controller');

router.route('/')
.post(categoryControllers.createCategory)
.get(categoryControllers.getCategory)

router.route('/:id')
.get(categoryControllers.getCategoryById)
.patch(categoryControllers.updateCategory)

module.exports = router;