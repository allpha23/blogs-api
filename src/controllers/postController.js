const router = require('express').Router();
const postService = require('../services/postService');
const validation = require('../middlewares/postValidation');
const authorization = require('../middlewares/authorization');

router.post('/', authorization, validation, async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const id = req.user;

  const findCategory = await postService.getAll(categoryIds);

  if (findCategory.length === 0) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  const newPost = await postService.create(id, title, content, findCategory);

  return res.status(201).json(newPost);
});

module.exports = router;