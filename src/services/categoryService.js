const { Category } = require('../database/models');

const getAll = async () => {
  const response = await Category.findAll();

  return response; 
};

const create = async (name) => {
  const response = await Category.create({ name });

  return response; 
};

module.exports = { getAll, create };