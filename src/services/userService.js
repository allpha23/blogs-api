const { User } = require('../database/models');

const getAll = async () => {
  const response = await User.findAll();

  return response; 
};

const getById = async (id) => {
  const response = await User.findByPk(id);

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
  console.log(response);
  return response; 
};

module.exports = { getAll, getById, findByEmail, create };