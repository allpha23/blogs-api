const { Category, BlogPost } = require('../database/models');

const getAll = async (categoryIds) => {
  const response = await Category.findAll({ where: {
    id: categoryIds,
  } });

  return response; 
};

const create = async (title, content) => {
  const response = await BlogPost.create({ userId: 1, title, content });

  return response; 
};

module.exports = { getAll, create };