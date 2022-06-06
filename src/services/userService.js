const { User } = require('../database/models');

const getAll = async () => {
  const response = await User.findAll({ attributes: { exclude: ['password'] } });

  return response; 
};

const getById = async (id) => {
  const response = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  return response; 
};

const findByEmail = async (email) => {
  const response = await User.findAll({ where: {
    email,
  } });

  return response; 
};

const create = async (displayName, email, password, image) => {
  const response = await User.create({ displayName, email, password, image });

  return response; 
};

module.exports = { getAll, getById, findByEmail, create };