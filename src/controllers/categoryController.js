const router = require('express').Router();
const categoryService = require('../services/categoryService');
const validation = require('../middlewares/categoryValidation');
const authorization = require('../middlewares/authorization');

router.get('/', authorization, async (req, res) => {
  const categories = await categoryService.getAll();
  
  return res.status(200).json(categories);
});

router.post('/', authorization, validation, async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryService.create(name);

  return res.status(201).json(newCategory);
});

module.exports = router;