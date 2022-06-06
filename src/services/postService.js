const { Category, BlogPost, PostCategory } = require('../database/models');

const getAll = async (categoryIds) => {
  const response = await Category.findAll({ where: {
    id: categoryIds,
  } });

  const ids = response.map((category) => category.id);

  return ids;
};

const create = async (id, title, content, findCategory) => {
  const post = await BlogPost.create({ userId: id, title, content });

  await PostCategory.bulkCreate(findCategory.map((categoryId) => (
    ({ postId: post.id, categoryId })
  )));

  return post; 
};

module.exports = { getAll, create };